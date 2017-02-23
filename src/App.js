import React, { Component } from 'react';
import {Button, ButtonGroup, Grid, Row, Col} from 'react-bootstrap';
import Votes from './components/Votes'
import posts from './posts';
import './App.css';

class Post extends Component {
  render(){
    return(
      <div className="post">
        <img src={this.props.post.post_image_url } alt="post" />
        <Votes votes={this.props.post.votes}/>
        <div className="content">
          <a href={this.props.post.url}><h4>{ this.props.post.title }</h4></a>
          <p>{ this.props.post.description }</p>
          <h5>Escrito por: <img src={this.props.post.writer_avatar_url} alt="user" /></h5>
        </div>
      </div>
    );
  }
}

class ShowPost extends Component {
  constructor(){
    super();
    this.state = {
      posts: posts
    }
  }

  render(){
    var showPost = [];
    this.state.posts.map(function(post, index){
      showPost.push(<Post post={post} key={index}/>)
    });
    return (
      <Row>
        {showPost}
      </Row>
    )
  }
}

class SortButton extends Component{
  render(){
    return(
      <div className="buttons">
        <h3>Orden: </h3>
        <ButtonGroup>
        <Button>Ascendente</Button>
        <Button>Descendente</Button>
        </ButtonGroup>
      </div>
    )
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Grid>
          <Col md={10} mdOffset={1}>
            <h1>Blog posts populares</h1>
            <Row>
              <SortButton />
            </Row>
            <ShowPost/>
          </Col>
        </Grid>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import {Button, ButtonGroup} from 'react-bootstrap';
import posts from './posts';
import './App.css';

class Post extends Component {
  render(){
    return(
      <div className="post">
        <img src={this.props.post.post_image_url } alt="post" />
        <div className="votes">
          <a><i className="material-icons">arrow_drop_up</i></a>
          <p>{this.props.post.votes}</p>
          <a href="#"><i className="material-icons">arrow_drop_down</i></a>
        </div>
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
  render(){
    var showPost = [];
    this.props.posts.forEach(function(post, index){
      showPost.push(<Post post={post} key={index}/>)
    });
    return (
      <div className="row">
        {showPost}
      </div>
    )


  }
}

class App extends Component {

  render() {
    return (
      <div className="App container">
        <div className="col-md-10 col-md-offset-1">
          <h1>Blog posts populares</h1>
          <div className="row">
            <div className="buttons">
              <h3>Orden: </h3>
              <ButtonGroup>
              <Button>Ascendente</Button>
              <Button>Descendente</Button>
              </ButtonGroup>
            </div>
          </div>
          <ShowPost posts={posts} />
        </div>
      </div>
    );
  }
}

export default App;

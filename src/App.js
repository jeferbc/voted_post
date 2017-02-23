import React, { Component } from 'react';
import {Button, ButtonGroup} from 'react-bootstrap';
import posts from './posts';
import './App.css';

class App extends Component {
  constructor(){
    super();

  }
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
          {posts.map((post,index) =>
            <div className="row">
            <div className="post">
            <img src={post.post_image_url } />
            <div className="votes">
            <a><i className="material-icons">arrow_drop_up</i></a>
            <p>{post.votes}</p>
            <a href="#"><i className="material-icons">arrow_drop_down</i></a>
            </div>
            <div className="content">
            <a href={post.url}><h4>{ post.title }</h4></a>
            <p>{ post.description }</p>
            <h5>Escrito por: <img src={post.writer_avatar_url} /></h5>
            </div>
            </div>
            </div>
          )};
        </div>
      </div>
    );
  }
}

export default App;

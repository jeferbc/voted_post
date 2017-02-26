import React, { Component } from 'react';
import {Row} from 'react-bootstrap';
import posts from '../posts';
import Post from './Post';
import store from '../store';

class ShowPost extends Component {
  constructor(){
    super();
    this.state = {
      posts: posts
    }
    store.subscribe(() => {
      this.setState({
        post: store.getState().posts
      })
    });
  }
  render(){
    var showPost = [];
    this.state.posts.map((post, index)=>
      showPost.push(<Post post={post} key={index}/>)
    );
    return (
      <Row>
        {showPost}
      </Row>
    )
  }
}

export default ShowPost;

import React, { Component } from 'react';
import {Row} from 'react-bootstrap';
import posts from '../posts';
import Post from './Post';

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

export default ShowPost;

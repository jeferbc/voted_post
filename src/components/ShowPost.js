import React, { Component } from 'react';
import {Row} from 'react-bootstrap';
import Post from './Post';
import store from '../store';

class ShowPost extends Component {
  constructor(){
    super();
    this.state = {
      posts: []
     }
    store.subscribe(() => {
      this.setState({
        posts: store.getState().posts
      });
    });

}
componentWillMount() {
  store.dispatch({
    type: "INITIAL_SORT"
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

import React, { Component } from 'react';
import Votes from './Votes'

const styles = {
  post:{
    display: 'inline-flex',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: '20px'
  },
  image:{
    height: 'auto',
    width: '25%'
  },
  content:{
    textAlign: 'left',
    display: 'flex',
    flexDirection: 'column',
    width: '65%'
  },
  grayText:{
    color: 'gray'
  },
  avatar:{
    width: '50px',
    height: '50px',
    borderRadius: '50px'
  }
}

class Post extends Component {
  render(){
    return(
      <div style={styles.post}>
        <img style={styles.image} src={this.props.post.post_image_url } alt="post" />
        <Votes post={this.props.post}/>
        <div style={styles.content}>
          <a href={this.props.post.url}><h4>{ this.props.post.title }</h4></a>
          <p>{ this.props.post.description }</p>
          <h5 style={styles.grayText}>Escrito por: <img style={styles.avatar} src={this.props.post.writer_avatar_url} alt="user" /></h5>
        </div>
      </div>
    );
  }
}

export default Post;

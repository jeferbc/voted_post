import React, { Component } from 'react';
import store from '../store'

const styles = {
  votes:{
    display: 'flex',
    flexDirection: 'column',
    width: '5%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  votesNumber:{
    margin: 0
  },
  arrow:{
    fontSize: '40px',
    cursor: 'pointer',
    color: 'blue'
  }
}

class Votes extends Component{
  constructor(){
    super();
    this.voteUp = this.voteUp.bind(this);
    this.voteDown = this.voteDown.bind(this);
  }
  voteUp(post){
    store.dispatch({
      type: "VOTE_UP",
      post
    });
  }

voteDown(post){
  store.dispatch({
    type: "VOTE_DOWN",
    post
  });
}

  render(){
    return(
      <div style={styles.votes}>
        <div onClick={() => this.voteUp(this.props.post)}><i className="material-icons" style={styles.arrow}>arrow_drop_up</i></div>
        <p style={styles.votesNumber}>{this.props.post.votes}</p>
        <div onClick={() => this.voteDown(this.props.post)}><i className="material-icons" style={styles.arrow}>arrow_drop_down</i></div>
      </div>
    );
  }
}
export default Votes;

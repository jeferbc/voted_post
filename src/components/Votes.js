import React, { Component } from 'react';
import store from '../store'
import {voteUp, voteDown, updateSortUp, updateSortDown} from '../actionCreators.js'

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
    store.dispatch(voteUp(post));
    if (store.getState().ascendent === true || store.getState().descendent === true){
      store.getState().ascendent === true ? store.dispatch(updateSortUp()) : store.dispatch(updateSortDown());
    }
  }

voteDown(post){
  store.dispatch(voteDown(post));
  if (store.getState().ascendent === true || store.getState().descendent === true){
    store.getState().ascendent === true ? store.dispatch(updateSortUp()) : store.dispatch(updateSortDown());
  }
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

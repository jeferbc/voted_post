import React, { Component } from 'react';

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
  arrowSize:{
    fontSize: '40px'
  }
}

class Votes extends Component{
  render(){
    return(
      <div style={styles.votes}>
        <a><i className="material-icons" style={styles.arrowSize}>arrow_drop_up</i></a>
        <p style={styles.votesNumber}>{this.props.votes}</p>
        <a ><i className="material-icons" style={styles.arrowSize}>arrow_drop_down</i></a>
      </div>
    );
  }
}

export default Votes;

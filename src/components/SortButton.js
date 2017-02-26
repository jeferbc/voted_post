import React, { Component } from 'react';
import {Button, ButtonGroup} from 'react-bootstrap';
import store from '../store';
const styles = {
  buttons:{
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '50%'
  }
}

class SortButton extends Component{
  constructor(){
    super();
    this.sortAscendent = this.sortAscendent.bind(this);
    this.sortDescendent = this.sortDescendent.bind(this);
    this.state = {
      ascendent: false,
      descendent: false
    }
  }
  sortAscendent(event){
    event.preventDefault();
    store.dispatch({
      type: "SORT_ASCENDENT",
    });
  }
  sortDescendent(event){
    event.preventDefault();
    store.dispatch({
      type: "SORT_DESCENDENT",
    });
  }
  render(){
    return(
      <div style={styles.buttons}>
        <h3>Orden: </h3>
        <ButtonGroup>
        <Button onClick={()=>this.sortAscendent(event)}>Ascendente</Button>
        <Button onClick={()=>this.sortDescendent(event)}>Descendente</Button>
        </ButtonGroup>
      </div>
    )
  }
}

export default SortButton;

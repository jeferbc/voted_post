import React, { Component } from 'react';
import {Button, ButtonGroup} from 'react-bootstrap';
import store from '../store';
import {updateSortUp, updateSortDown} from '../actionCreators.js'

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
    this.sortAscendent = this.updateSort.bind(this);
    this.state = {
      ascendent: false,
      descendent: false
    }
    store.subscribe(() => {
      this.setState({
        ascendent: store.getState().ascendent,
        descendent: store.getState().descendent
      })
    })
  }
  updateSort(type){
    if (type === 'asc') {
      store.dispatch(updateSortUp());
    }else
      store.dispatch(store.dispatch(updateSortDown()));
    }

  render(){
    return(
      <div style={styles.buttons}>
        <h3>Orden: </h3>
        <ButtonGroup>
        <Button onClick={()=>this.updateSort('asc')}>Ascendente</Button>
        <Button onClick={()=>this.updateSort('des')}>Descendente</Button>
        </ButtonGroup>
      </div>
    )
  }
}

export default SortButton;

import React, { Component } from 'react';
import {Button, ButtonGroup} from 'react-bootstrap';
const styles = {
  buttons:{
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '50%'
  }
}

class SortButton extends Component{
  render(){
    return(
      <div style={styles.buttons}>
        <h3>Orden: </h3>
        <ButtonGroup>
        <Button>Ascendente</Button>
        <Button>Descendente</Button>
        </ButtonGroup>
      </div>
    )
  }
}

export default SortButton;

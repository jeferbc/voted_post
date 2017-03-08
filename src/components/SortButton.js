import React from 'react';
import {Button, ButtonGroup} from 'react-bootstrap';
import {updateSortUp, updateSortDown} from '../actionCreators.js'
import {connect} from 'react-redux';

const styles = {
  buttons:{
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '50%'
  }
}

const SortButton = (props) => {
  return(
    <div style={styles.buttons}>
      <h3>Orden: </h3>
      <ButtonGroup>
      <Button onClick={()=>props.updateSort('asc')}>Ascendente</Button>
      <Button onClick={()=>props.updateSort('des')}>Descendente</Button>
      </ButtonGroup>
    </div>
  );
}

const mapStateToProps = state => {
  return{
    ascendent: state.ascendent,
    descendent: state.descendent
  };
}

const mapDispatchToProps = dispatch => {
  return{
    updateSort(type){
      if (type === 'asc')
        dispatch(updateSortUp());
      else
        dispatch(updateSortDown());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SortButton);

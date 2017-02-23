import React, { Component } from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import ShowPost from './components/ShowPost';
import SortButton from './components/SortButton';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Grid>
          <Col md={10} mdOffset={1}>
            <h1>Blog posts populares</h1>
            <Row>
              <SortButton />
            </Row>
            <ShowPost/>
          </Col>
        </Grid>
      </div>
    );
  }
}

export default App;

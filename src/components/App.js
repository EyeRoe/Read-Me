import React, { Component } from 'react';
import '../App.css';
import Header from './Header';
import Form from './Form';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header text="Read Me" />
        <div className="selectionArea">
          <Form text="oh god oh god" />
        </div>
        <p>Put stuff here please</p>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import '../App.css';
import Header from './Header';
import Form from './Form';
import Content from './Content.js';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header text="Read Me" />
        <Form />
        <Content />
      </div>
    );
  }
}

export default App;

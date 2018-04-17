import React, { Component } from 'react';
import '../App.css';
import Header from './Header';
import Form from './Form';
import Content from './Content.js';
import LogIn from './LogIn.js';
import SignUp from './SignUp.js';
import ReadingList from './ReadingList'


class App extends Component {
  state = {
    responseList: []
  }

  setResponseList = (data) => {
    this.setState({responseList: data})
  }

  render() {
    return (
      <div className="App">
        <Header text="Read Me" />
        <LogIn/>
        <SignUp/>
        <ReadingList />
        <Form setResponseList={this.setResponseList}/>
        <Content responseList={this.state.responseList}/>
      </div>
    );
  }
}

export default App;

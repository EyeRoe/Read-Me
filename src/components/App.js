import React, { Component } from 'react';
import '../App.css';
import Header from './Header';
import Form from './Form';
import Content from './Content.js';
import LogIn from './LogIn.js';
import SignUp from './SignUp.js';
import ReadingList from './ReadingList'
import { Switch, Route } from 'react-router-dom'



class App extends Component {
  state = {
    responseList: []
  }

  setResponseList = (data) => {
    this.setState({ responseList: data })
  }
/*
  render() {
    return (
      <div className="App">
        <Header text="Read Me" />
        <Switch>
          <LogIn />
          <SignUp />
          <ReadingList />
          <Form setResponseList={this.setResponseList} />
          <Content responseList={this.state.responseList} />
        </Switch>
      </div>
    );
  }
*/
render() {
  return (
    <div className="App">
      <Header text="Read Me" />
      <Switch>
        <Route path='/signup' component={SignUp}/>
        <Route path='/login' component={LogIn}/>
        <Route path='/readinglist' component={ReadingList}/>
        <Route exact path='/' render={(props) => (
          <div>
            <Form setResponseList={this.setResponseList} />
            <Content responseList={this.state.responseList} />
          </div>
        )}/>
      </Switch>
    </div>
  );
}
}

export default App;

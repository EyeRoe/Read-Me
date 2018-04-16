import React, { Component } from 'react';

class Header extends Component {

  LogIn = (e) => {
    console.log("yay you clicked me")

  }

  render() {
    return (
      <div>
        <div className="App-header">
          <h1>{this.props.text}</h1>
        </div>
        <div className="LogInDiv">
          <button type="button" onClick={(e) => this.LogIn(e)}>Log In</button>
        </div>
      </div>
    )
  }
}

export default Header;
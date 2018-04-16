import React, { Component } from 'react';

class LogIn extends Component {
  LogIn = (e) => {
    console.log("yay you clicked me")

  }
  render() {
    return (
      <div className="LogInDiv">
        <button type="button" onClick={(e) => this.LogIn(e)}>Log In</button>
      </div>
    )
  }
}

export default LogIn;
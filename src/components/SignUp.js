import React, { Component } from 'react';

class SignUp extends Component {

  handleForm = (e) => {
    e.preventDefault()
    console.log(e)
  }

  render() {
    return (
      <form>
        Name:<br></br>
        <input type="text" name="name"></input>
        Password:<br></br>
        <input type="text" name="password"></input>
        <input type="submit" onClick={(e) => this.handleForm(e)}></input>
      </form>
    )
  }
}

export default SignUp
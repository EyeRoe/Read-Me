import React, { Component } from 'react';
import axios from 'axios';
const endpoint = "https://polar-sea-31277.herokuapp.com"

class SignUp extends Component {

  handleForm = (e) => {
    e.preventDefault()
    let name = e.target.name.value
    let password = e.target.password.value
    axios.post(`${endpoint}/signup`, { name, password })
      .then(result => {
        // console.log(result)
        localStorage.setItem('users_id', result.data.id)
      })
      .catch(console.log)
  }

  render() {
    return (
      <div className="LogInDiv">
        <form onSubmit={this.handleForm} action="#">
          <div>
            <label for="username">Name</label>
            <input id="username" type="text" name="name"></input>
          </div>
          <div>
            <label for="userpassword">Password</label>
            <input id="userpassword" type="password" name="password"></input>
          </div>
          <div>
            <input className="submit" type="submit" value="Sign Up"></input>
          </div>
        </form>
      </div>
    )
  }
}

export default SignUp
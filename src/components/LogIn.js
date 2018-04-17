import React, { Component } from 'react';
import axios from 'axios';
const endpoint = "http://localhost:3001"

class LogIn extends Component {
  LogIn = (e) => {
    e.preventDefault()
    let name = e.target.name.value
    let password = e.target.password.value
    // console.log('name', name)
    // console.log('password', password)
    axios.post(`${endpoint}/login`, { name, password })
      .then(result => {
        console.log(result)
        debugger
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
            <input type="submit" value="Log In"></input>
          </div>
        </form>
      </div>
    )
  }
}

export default LogIn;
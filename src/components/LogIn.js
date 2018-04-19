import React, { Component } from 'react';
import axios from 'axios';
const endpoint = "https://polar-sea-31277.herokuapp.com"

class LogIn extends Component {
  handleForm = (e) => {
    e.preventDefault()
    let name = e.target.name.value
    let password = e.target.password.value
    // console.log('name', name)
    // console.log('password', password)
    debugger
    axios.post(`${endpoint}/login`, { name, password })
      .then(result => {
        debugger
        console.log(result)
        localStorage.setItem('users_id', result.data.user.id)
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
            <input className="submit" type="submit" value="Log In"></input>
          </div>
        </form>
      </div>
    )
  }
}

export default LogIn;
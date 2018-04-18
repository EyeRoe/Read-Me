import React, { Component } from 'react';
import { Link } from 'react-router-dom'


class Header extends Component {

  logout = () => {
    localStorage.setItem('users_id', undefined)
  }

  render() {
    let users_id = localStorage.getItem('users_id')
    return (
      <div className="App-header">
        <div className="HeaderButtons">
          <button><Link to='/'>Home</Link></button>
          <button><Link to='/signup'>Sign up</Link></button>
          <button><Link to='/login'>log In</Link></button>
          <button onClick={this.logout}>Log out</button>
          {(users_id) ? <button><Link to='/readinglist'>Reading List</Link></button> : ''}
        </div>
                <h1>{this.props.text}</h1>

      </div>
    )
  }
}

export default Header;
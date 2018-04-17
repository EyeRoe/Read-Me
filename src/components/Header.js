import React, { Component } from 'react';
import { Link } from 'react-router-dom'


class Header extends Component {

  render() {
    return (
      <div className="App-header">
        <h1>{this.props.text}</h1>
        <button><Link to='/'>Home</Link></button>
        <button><Link to='/signup'>Sign up</Link></button>
        <button><Link to='/login'>login</Link></button>
        <button><Link to='/readinglist'>Reading List</Link></button>
      </div>
    )
  }
}

export default Header;
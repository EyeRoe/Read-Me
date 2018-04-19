import React, { Component } from 'react';
import axios from 'axios';

class ReadingList extends Component {
  state = {
    readingList: []
  }

  componentDidMount() {
    debugger
    let users_id = localStorage.getItem('users_id')
    axios.get(`https://polar-sea-31277.herokuapp.com/users/${users_id}/readinglist`)
      .then(response => {
        console.log('reading list', response)
        this.setState({
          readingList: response.data
        })
      })
      .catch(err => {
        console.log(err)
      })
  }

  generateBooks = () => {
    let books = this.state.readingList.map(book => (
      <div className="individualBook">
        <a href={book.link}><img src={book.thumbnail} alt="smallThumbnail"></img></a>
        <div className="bookInfo">
          <p className="title">{book.title}</p>
          <p>By {book.authors}</p>
          <p className="description">{book.description}</p>
        </div>
      </div>
    ))
    return books
  }
  render() {
    console.log('state', this.state)
    return (
      <div className="bookList">
        {this.generateBooks()}
      </div>
    )
  }
}

export default ReadingList
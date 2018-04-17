import React, { Component } from 'react';
import axios from 'axios';

class ReadingList extends Component {
  state = {
    readingList: []
  }

  componentDidMount() {
    debugger
    let users_id = localStorage.getItem('users_id')
    axios.get(`http://localhost:3001/users/${users_id}/readinglist`)
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


  /*
  generateBook = () => {
    console.log('our book state', this.state)
    debugger
    var copyOfReadingList = this.state.readingList
    var preview = copyOfReadingList.preview
    var description = copyOfReadingList.description
    var authors = copyOfReadingList.authors
    var link = copyOfReadingList.link
    var title = copyOfReadingList.title

    return (<div className="individualBook">
      <a href={link}><img src={preview} alt="smallThumbnail"></img></a>
      <div className="bookInfo">
        <p className="title">{title}</p>
        <p>By {authors}</p>
        <p className="description">{description}</p>
      </div>
    </div>
    )
  }*/

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
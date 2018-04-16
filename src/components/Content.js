import React, { Component } from 'react';
import image from '../assets/noImageAvailable.jpg'

class Content extends Component {
  constructor(props) {
    super(props)
    this.state = {
      readingList: [],
    }
  }

  siftBooks = (bookArray) => {
    // var bookArray = obj.items
    return bookArray.map(book => {
      return this.generateIndividualBook(book.volumeInfo)
    })
  }

  generateIndividualBook = (book) => {
    var preview
    var description
    var authors = book.authors
    var link = book.infoLink
    var title = book.title

    //give default image to books with no thumbnail
    if (!book.imageLinks) {
      preview = image
    } else {
      preview = book.imageLinks.thumbnail
    }
    //Prevent book descriptions from overflowing and disrupting display
    if (book.description) {
      if (book.description.length > 250) {
        description = book.description.slice(0, 245) + "..."
      } else {
        description = book.description
      }
    } else {
      description = "No Description Available"
    }

    if (book.title.length > 35) {
      title = book.title.slice(0, 32) + "..."
    }

    //add syntax for books with more than 1 author
    if (!authors) {
      authors = "No Author Information"
    } else if (authors.length > 1) {
      authors = authors.join(", ")
    }
    return (<div className="individualBook">
      <a href={link}><img src={preview} alt="smallThumbnail"></img></a>
      <div className="bookButtons">
        <button type="button"
          data-title={title}
          data-thumbnail={preview}
          data-authors={authors}
          data-description={description}
          data-link={link}

          onClick={(e) => this.saveBook(e)}>Add to Reading List</button>
        <button><a href={link}>More Info</a></button>
      </div>
      <div className="bookInfo">
        <p className="title">{title}</p>
        <p>By {authors}</p>
        <p className="description">{description}</p>
      </div>
    </div>
    )
  }
  saveBook = (e) => {
    console.log(e.target.dataset)
    var currentValue = e.target.value
    var copyOfReadingList = this.state.readingList
    copyOfReadingList.push(currentValue)
    this.setState({ readingList: copyOfReadingList })
    console.log(this.state.readingList)
  }

  render() {
    // console.log('response List', this.props.responseList)
    return (
      <div className="bookList">
        {this.siftBooks(this.props.responseList)}
      </div>)
  }
}
export default Content
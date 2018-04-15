import React, { Component } from 'react';
import data from '../assets/dataExample.js'
import image from '../assets/noImageAvailable.jpg'

class Content extends Component {

  siftBooks = (obj) => {
    var bookArray = obj.items
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
    if(book.description){
      if(book.description.length > 150){
        description = book.description.slice(0,147)+"..."
      }else{
        description = book.description
      }
    }else{
      description = "No Description Available"
    }
    //add syntax for books with more than 1 author
    if(authors.length > 1){
      authors = authors.join(", ")
    }

    return <div className="individualBook"><a href={link}><img src={preview} alt="smallThumbnail"></img></a><div className="bookInfo"><p className="title">{title}</p><p>By {authors}</p><p>{description}</p></div></div>
  }

  render() {
    return (
      <div className="bookList">
        {this.siftBooks(data)}
      </div>)
  }
}
export default Content
import React, { Component } from 'react';
import data from '../assets/dataExample.js'

class Content extends Component {

  siftBooks = (obj) => {
    var bookArray = obj.items
    return bookArray.map(book => {
      return this.generateIndividualBook(book.volumeInfo)
    })
  }

  generateIndividualBook = (book) => {
    console.log(book)
    var link = book.infoLink
    var thumbnail
    var title = book.title
    var authors = book.authors
    var description = book.description

    if (!book.imageLinks.thumbnail) {
      thumbnail = '../assets/noImageAvailable.jpg'
    } else {
      thumbnail = book.imageLinks.thumbnail
    }

    return <div className="individualBook"><a href={link}><img src={thumbnail} alt="smallThumbnail"></img></a><div className="bookInfo"><p className="title">{title}</p><p>By {authors}</p><p>{description}</p></div></div>
  }
  //sould be taking in the obj volumeInfo
  // generateBookInfo = (obj) => {
  //   var title = obj.title
  //   var authors = obj.authors
  //   var description = obj.description

  //   return <div className="bookInfo"><p className="title">{title}</p><p>By {authors}</p><p>{description}</p></div>
  // }


  render() {
    return (
      <div className="bookList">
        {this.siftBooks(data)}
        {/* <div className="individualBook">
          <a href={data.items[4].volumeInfo.infoLink}><img src={data.items[4].volumeInfo.imageLinks.thumbnail} alt="smallThumbnail"></img></a>
          <div className="bookInfo">
            <p className="title">{data.items[4].volumeInfo.title}</p>
            <p>By {data.items[4].volumeInfo.authors}</p>
            <p>{data.items[4].volumeInfo.description}</p>
          </div>
        </div>
        <div className="individualBook">
          <a href={data.items[0].volumeInfo.infoLink}><img src={data.items[0].volumeInfo.imageLinks.thumbnail} alt="smallThumbnail"></img></a>
          <div className="bookInfo">
            <p className="title">{data.items[0].volumeInfo.title}</p>
            <p>By {data.items[0].volumeInfo.authors}</p>
            <p>{data.items[0].volumeInfo.description}</p>
          </div>
        </div> */}
      </div>)
  }
}
export default Content
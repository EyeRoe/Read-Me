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

    }
    return <div className="individualBook"><a href={link}><img src={preview} alt="smallThumbnail"></img></a><div className="bookInfo"><p className="title">{title}</p><p>By {authors}</p><p>{description}</p></div></div>
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
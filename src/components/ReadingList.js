import React, { Component } from 'react';
import axios from 'axios';

class ReadingList extends Component {

  generateBook = () => {
    var preview
    var description
    var authors
    var link
    var title 

    return (<div className="individualBook">
      <a href={link}><img src={preview} alt="smallThumbnail"></img></a>
      <div className="bookInfo">
        <p className="title">{title}</p>
        <p>By {authors}</p>
        <p className="description">{description}</p>
      </div>
    </div>
    )
  }
}

export default ReadingList
import React, { Component } from 'react';
import axios from 'axios'
import ThemeList from '../genreList.js'
var baseURL = "https://cors-anywhere.herokuapp.com/https://www.googleapis.com/books/v1/volumes?langRestrict=en&q=subject+"
var baseURL2 = ":keyes&key=AIzaSyDArCmbmRnewR633_Z287rjcyz5B5oP0k4"

class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {
      listOfGenres: [],
      responseList: [],
    }
  }


  generateCheckbox = (arr) => {
    var buttons = [];
    for (var i = 0; i < arr.length; i++) {
      let currentTheme = arr[i]
      buttons.push(<div className="individualCheckBoxes" onClick={(e) => this.boxChecked(e)}><input type="checkbox" id={currentTheme} name={currentTheme} value={currentTheme}></input><label for={currentTheme}>{currentTheme}</label></div>)
    }
    // console.log(buttons)
    return buttons
  }

  generateForm = (object) => {
    var themes = []
    for (let key in object) {
      var trigger = this.generateCheckbox(object[key])
      themes.push(      <div className="genreList">{trigger}</div>    )
    }
    return themes
  }

  boxChecked = (e) => {
    var currentValue = e.target.value
    var copyOflistOfGenres = this.state.listOfGenres
    copyOflistOfGenres.push(currentValue)
    this.setState({ listOfGenres: copyOflistOfGenres })
    // console.log(this.state.listOfGenres)
  }

  bookAPI = (e) => {
    var copyOflistOfGenres = this.state.listOfGenres
    e.preventDefault()
    var searchTerm = ""
    // hack to remove extra undefineds that result from clicking outside the box
    copyOflistOfGenres = copyOflistOfGenres.filter(genre => genre !== undefined)
    copyOflistOfGenres.map(genre => {
      
      return searchTerm += genre.replace(/( )/g, "+")
    })
    axios.get(`${baseURL}${searchTerm}${baseURL2}`)
      .then(result => {
        this.props.setResponseList(result.data.items)
        //this.setState({ responseList: result.data.items })
      })
  }

  render() {
    return (
      <div>
        <form>
            {this.generateForm(ThemeList)}
          <div className="submitDIV">
            <button type="submit" onClick={(e) => this.bookAPI(e)}>Submit</button>
          </div>
        </form>
      </div>
    )
  }
}

export default Form;
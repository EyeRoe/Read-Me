import React, { Component } from 'react';
import axios from 'axios'
import ThemeList from '../genreList.js'
var baseURL = "https://cors-anywhere.herokuapp.com/https://www.googleapis.com/books/v1/volumes?q=subject+"
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
    let temp = []
    for (var i = 0; i < arr.length; i++) {
      let currentTheme = arr[i]
      temp.push(<div className="individualCheckBoxes" onClick={(e) => this.boxChecked(e)}><input type="checkbox" id={currentTheme} name={currentTheme} value={currentTheme}></input><label for={currentTheme}>{currentTheme}</label></div>)

      if (i % 3 === 2) {
        let buttonSubContainer = <div className="tinyButtons">{temp}</div>;
        buttons.push(buttonSubContainer)
        temp = []
      }
    }
    return buttons
  }

  generateForm = (object) => {
    var themes = []
    for (let key in object) {
      var trigger = this.generateCheckbox(object[key])
      themes.push(<div className="genreList">{trigger}</div>)
    }
    return themes
  }

  boxChecked = (e) => {
    var currentValue = e.target.value
    var copyOflistOfGenres = this.state.listOfGenres
    copyOflistOfGenres.push(currentValue)
    this.setState({ listOfGenres: copyOflistOfGenres })
  }

  bookAPI = (e) => {
    var copyOflistOfGenres = this.state.listOfGenres
    e.preventDefault()
    var searchTerm = []
    // hack to remove extra undefineds that result from clicking outside the box
    copyOflistOfGenres = copyOflistOfGenres.filter(genre => genre !== undefined)
    copyOflistOfGenres.map(genre => {
      let temp =""
      temp += genre.replace(/( )/g, "+")
      searchTerm.push(temp)
      return searchTerm.join("+")
    })
    axios.get(`${baseURL}${searchTerm}${baseURL2}`)
      .then(result => {
        this.props.setResponseList(result.data.items)
        //this.setState({ responseList: result.data.items })
      })
  }

  render() {
    return (
      <div className="GreaterThemeList">
        <form>
          {this.generateForm(ThemeList)}
          <div >
            <button className="submit" type="submit" onClick={(e) => this.bookAPI(e)}>Search</button>
          </div>
        </form>
      </div>
    )
  }
}

export default Form;
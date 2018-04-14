import React, { Component } from 'react';
import axios from 'axios'
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
    for (var i = 0; i < arr.length; i++) {
      let currentTheme = arr[i]
      buttons.push(<div className="individualCheckBoxes" onClick={(e) => this.boxChecked(e)}><input type="checkbox" id={currentTheme} name={currentTheme} value={currentTheme}></input><label for={currentTheme}>{currentTheme}</label></div>)
    }
    // console.log(buttons)
    return buttons
  }

  generateForm = () => {
    var themes = ["Fiction", "Fantasy", "Action & Adventure", "Contemporary", "Fantasy & Magic","Legends, Myths, Fables", "School & Education","Young Adult Fiction", "Wizards & Witches", "Historical","Europe","Ancient Civilizations","Animals","Horses","Classics","Family","19th Century","18th Century","Country Life","Lifestyles","Classics","Humorous Stories","People & Places","Drama"]
    return this.generateCheckbox(themes)
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
    copyOflistOfGenres.forEach(genre => {
      searchTerm += genre.replace(/( )/g, "+")
    })
    axios.get(`${baseURL}${searchTerm}${baseURL2}`)
      .then(result => {
        this.setState({responseList: result.data.items})
        console.log(this.state.responseList)
      })
  }

  render() {
    return (
      <div>
        <form>
          <div className="allCheckBoxes">
            {this.generateForm()}
          </div>
          <div>
            <button type="submit" onClick={(e) => this.bookAPI(e)}>Submit</button>
          </div>
        </form>
      </div>
    )
  }
}

export default Form;
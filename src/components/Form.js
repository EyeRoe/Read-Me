import React, { Component } from 'react';
import axios from 'axios'
var baseURL = "https://cors-anywhere.herokuapp.com/https://www.googleapis.com/books/v1/volumes?q=subject+"
var baseURL2 = ":keyes&key=AIzaSyDArCmbmRnewR633_Z287rjcyz5B5oP0k4"

class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {
      listOfGenres: [],
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
    //var themes = ["Beauty", "Coming of Age", "Circle of Life", "Death", "Communication", "Darkness and Light", "Convention and Rebellion", "Desire to Escape", "Disillusionment and Dreams", "Displacement", "Dangers of Ignorance", "Empowerment", "Everlasting Love", "Evil", "Family", "Good versus Bad", "Greed", "Growing Up", "Heroism", "Identity Crisis", "Illusion of Power", "Idividual versus Society", "Isolation", "Knowledge versus Ignorance", "Loneliness", "Loss of Innocence", "Lost Love", "Man Against Nature", "Manipulation", "Motherhood", "Nationalism", "Necessity of Work", "Oppression", "Optimism", "Power and Corruption", "Pride and Downfall", "Progress", "Quest", "Rebirth", "Reunion", "Religion", "Self", "Technology", "Vanity", "War", "Will to Survive", "Wisdom of Experience", "Working Class Struggles", "Youth"];
    var themes = ["fiction"]
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
    var arr = this.state.listOfGenres
    e.preventDefault()
    var searchTerm = ""
    arr.forEach(genre => {
      searchTerm += genre.replace(/( )/g, "+")
    })
    axios.get(`${baseURL}${searchTerm}${baseURL2}`)
      .then(result => {
        console.log(result)
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
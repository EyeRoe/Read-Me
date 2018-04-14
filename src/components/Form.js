import React, { Component } from 'react';

class Form extends Component {

  generateCheckbox(arr) {
    var buttons = [];

    for (var i = 0; i < arr.length; i++) {
      let currentTheme = arr[i]
      buttons.push(<div className="checkBoxes"><input type="checkbox" id={currentTheme} name={currentTheme} value={currentTheme}></input><label for={currentTheme}>{currentTheme}</label></div>)
    }
    console.log(buttons)
    return buttons
  }
  // spliceTheArray(arr) {
  //   var arrayOfArrays = []

  //   while (arr.length) {
  //     arrayOfArrays.push(arr.splice(0, 10));
  //   }

  //   return arrayOfArrays
  // }
  generateForm() {
    var themes = ["Beauty", "Coming of Age", "Circle of Life", "Death", "Communication", "Darkness and Light", "Convention and Rebellion", "Desire to Escape", "Disillusionment and Dreams", "Displacement", "Dangers of Ignorance", "Empowerment", "Everlasting Love", "Evil", "Family", "Good versus Bad", "Greed", "Growing Up", "Heroism", "Identity Crisis", "Illusion of Power", "Idividual versus Society", "Isolation", "Knowledge versus Ignorance", "Loneliness", "Loss of Innocence", "Lost Love", "Man Against Nature", "Manipulation", "Motherhood", "Nationalism", "Necessity of Work", "Oppression", "Optimism", "Power and Corruption", "Pride and Downfall", "Progress", "Quest", "Rebirth", "Reunion", "Religion", "Self", "Technology", "Vanity", "War", "Will to Survive", "Wisdom of Experience", "Working Class Struggles", "Youth"];


    return this.generateCheckbox(themes)
  }


  render() {
    return (
      <div>
        <form>
        <div className="poop">
          {this.generateForm()}
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    )
  }
}

export default Form;
import React, { Component } from 'react';

class Form extends Component {
  render() {
    return (
      <div>
        <form>
          <input type="checkbox" id="checkbox1" name="heck" value="nothing"></input>
          <label for="checkbox1">{this.props.text}</label>
          <div>
          <button type="submit">Submit</button>
          </div>
        </form>
      </div>
      )
  }
}

export default Form;
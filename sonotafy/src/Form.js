import React from 'react';
import Button from './Button.js'

// import './styles.css'

class Form extends React.Component {

  constructor() {
    super();
  }


  render() {
    return (
      <div className="form-wrapper">
        <h3>{this.props.title}:</h3>
        Username:
        <input type="text"/>
        Password:
        <input type="text"/>
        <Button name="Submit"/>
      </div>
    );
  }
}


export default Form

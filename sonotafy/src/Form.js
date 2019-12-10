import React from 'react';
import Button from './Button.js'
import { Link } from 'react-router-dom'
// import './styles.css'

class Form extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      User: '',
      Pw: ''
    }
    this.setUser = this.setUser.bind(this);
    this.setPw = this.setPw.bind(this);
  }

  setUser(e) {
    this.setState({User: e.target.value});
  }

  setPw(e) {
    this.setState({Pw: e.target.value});
  }



  render() {
    return (
      <div className="form-wrapper">

        <h3>{this.props.title}:</h3>
        Username:
        <input type="text" onChange={this.setUser} value={this.state.User}/>
        Password:
        <input type="text" onChange={this.setPw} value={this.state.Pw}/>
        <Link to={{
          pathname: this.props.link,
          state: {
            user: this.state.User,
            pw: this.state.Pw
          }
        }}>
        <Button name="Submit"/>
        </Link>


      </div>
    );
  }
}


export default Form

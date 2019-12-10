import React from 'react';
import logo from './logo.svg';
import './App.css';
import './styles.css';
import Navbar from './Navbar.js';
import Button from './Button.js';
import Form from './Form.js';




class createAccount extends React.Component {

  state = {
    user: '',
    pw: ''
  }

  componentDidMount() {
    const { pw } = this.props.location.state;
    const { user } = this.props.location.state;
    this.setState({user: user, pw: pw});
  }




  render() {
    return (
        <div className="App">
          <header className="App-header">

            <Navbar />
          </header>
          <div className="Body">
            {/*<Button name="Search For Songs" />*/}
            <h1>{this.props.data}</h1>
            <h1>{this.state.user}</h1>
            <h1>{this.state.pw}</h1>
          </div>
        </div>
    );
  }
}

export default createAccount;

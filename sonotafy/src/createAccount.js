import React from 'react';
import logo from './logo.svg';
import './App.css';
import './styles.css';
import Navbar from './Navbar.js';
import Button from './Button.js';
import Form from './Form.js';
import * as firebase from 'firebase/app';
import 'firebase/auth'
const config = {
  apiKey: "AIzaSyDd0VuaCa5mYNfL1LaPclEladrN7C1qeyc",
  authDomain: "sonotafy-efaf9.firebaseapp.com",
  databaseURL: "https://sonotafy-efaf9.firebaseio.com",
  projectId: "sonotafy-efaf9",
  storageBucket: "sonotafy-efaf9.appspot.com",
  messagingSenderId: "435894611976",
}
firebase.initializeApp(config);




class createAccount extends React.Component {

  state = {
    user: '',
    pw: '',
    msg: ''
  }

  componentDidMount() {
    const { pw } = this.props.location.state;
    const { user } = this.props.location.state;
    var msg = user + ' Account Created';
    firebase.auth().createUserWithEmailAndPassword(user, pw).catch(function(error) {
      // Handle Errors here.
      console.log(error.message);
      msg = "Error creating " + user;
      // ...
    });
    this.setState({user: user, pw: pw, msg: msg});
  }




  render() {
    return (
        <div className="App">
          <header className="App-header">

            <Navbar />
          </header>
          <div className="Body">
            {/*<Button name="Search For Songs" />*/}
            <h1>{this.state.msg}</h1>
            <Button name="Back" link="/" />
          </div>
          
        </div>
    );
  }
}

export default createAccount;

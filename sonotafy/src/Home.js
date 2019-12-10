import React from 'react';
import logo from './logo.svg';
import './App.css';
import './styles.css';
import Navbar from './Navbar.js';
import Button from './Button.js';
import Form from './Form.js';


class Home extends React.Component {
  render() {
    return (
        <div className="App">
          <header className="App-header">

            <Navbar />
          </header>
          <div className="Body">
            {/*<Button name="Search For Songs" />*/}
            <Form title="Create Account" link="/createaccount"/>
            <h3>---- OR ----</h3>
            <Form title="Log In" link="/account"/>
          </div>
        </div>
    );
  }
}

export default Home;

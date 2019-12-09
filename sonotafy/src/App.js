import React from 'react';
import logo from './logo.svg';
import './App.css';
import './styles.css';
import Navbar from './Navbar.js';
import Button from './Button.js';
import Form from './Form.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <style>
          @import url('https://fonts.googleapis.com/css?family=Pacifico&display=swap');
        </style>
        <Navbar />
      </header>
      <div className="Body">
        {/*<Button name="Search For Songs" />*/}
        <Form title="Create Account"/>
        <h3>---- OR ----</h3>
        <Form title="Log In"/>
      </div>
    </div>
  );
}

export default App;

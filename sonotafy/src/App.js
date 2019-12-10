import React from 'react';
import logo from './logo.svg';
import './App.css';
import './styles.css';
import Navbar from './Navbar.js';
import Button from './Button.js';
import Form from './Form.js';
import Home from './Home.js';
import CreateAccount from './createAccount.js'
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>

      <Route path="/" component={Home} exact />
      <Route path="/createaccount" render={(props) => <CreateAccount {...props}/>}/>
    </BrowserRouter>

  );
}

export default App;

import React from 'react';
import Button from './Button.js'


class Navbar extends React.Component {
  render() {
    return (
      <div className="navbar-wrapper">
      <style>
@import url('https://fonts.googleapis.com/css?family=Pacifico&display=swap');
</style>
      <div className="nav-block">
        <img src="https://cdn.discordapp.com/attachments/623703395236315158/653521345124106260/Sonatafy_Logo.png"/>
        <h1>Sonatafy</h1>
        {/*<ul className="nav-list">
          <li><Button name="Log In"/></li>
          <li><Button name="Create Account"/></li>
        </ul>*/}
        </div>
      </div>
    )
  }
}


export default Navbar;

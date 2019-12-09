import React from 'react';
import Navbar from './Navbar.js';
import fetch from "node-fetch";
import SpotifyWebApi from "spotify-web-api-js";
const spotifyAPI = new SpotifyWebApi();


class Search extends React.Component {

  render() {
    return (
      <div className="search-wrapper">
        <Navbar />

      </div>
    )
  }
}


export default Search;

import React, { Component, useState } from 'react';
// import './App.css';
import Spotify from 'spotify-web-api-js';
const spotifyWebApi = new Spotify();
var i = 0;

class App extends Component {
  constructor() {
    super();

    const params = this.getHashParams();
    this.state = {
      loggedIn: params.access_token ? true : false,
      nowPlaying: {
        name: '',
        image: ''
      },
      playlistResults: {
        name: '',
        id: '',
      },
      playlistTracks: {
        track1: '',
        track2: '',
        track3: '',
        track4: '',
        track5: ''
      },
      userInput: "sad"
    }
    if (params.access_token) {
      spotifyWebApi.setAccessToken(params.access_token)
    }
  }

  // Get access tokens
  getHashParams() {
    var hashParams = {};
    var e, r = /([^&;=]+)=?([^&;]*)/g,
      q = window.location.hash.substring(1);
    while (e = r.exec(q)) {
      hashParams[e[1]] = decodeURIComponent(e[2]);
    }
    return hashParams;
  }

  // Get the now Playing Song
  getNowPlaying() {
    spotifyWebApi.getMyCurrentPlaybackState()
      .then((response) => {
        this.setState({
          nowPlaying: {
            name: response.item.artists[0].name,
            image: response.item.album.images[0].url
          }
        })
      })
  }

  // Search for playlists that include 'Sad'
  searchPlaylists() {
    spotifyWebApi.searchPlaylists(this.state.userInput)

      .then((response) => {
        this.setState({
          playlistResults: {
            name: response.playlists.items[i++].name,
            id: response.playlists.items[i++].id
          }
        })
      })
  }

  // Get the tracks from the above playlist
  getPlaylistTracks() {
    spotifyWebApi.getPlaylistTracks(this.state.playlistResults.id)
      .then((response) => {
        console.log(response);
        this.setState({
          playlistTracks: {
            track1: response.items[0].track.name,
            track2: response.items[1].track.name,
            track3: response.items[2].track.name,
            track4: response.items[3].track.name,
            track5: response.items[4].track.name,
          }
        })
      })
  }

  render() {
    return (
      <div className="App">

        <a href="http://localhost:8888">
          <button>
            Login With Spotify
            </button>
        </a>

        <div>
          Now Playing: {this.state.nowPlaying.name}
        </div>

        <div>
          <img src={this.state.nowPlaying.image} style={{ width: 100 }}>
          </img>
        </div>
        
        <div>
          <button onClick={() => this.getNowPlaying()}>
            Check Now Playing
          </button>
        </div>

        <div>
          <form>
            <p><input type='text' placeholder='mood' mood='happy'></input></p>
            <p><button onClick={() => this.searchPlaylists()}>
              Search for a Playlist
				</button>
            </p>
          </form>
        </div>

        <div>
          Search Results: {this.state.playlistResults.name}
        </div>

        <div>
          <button onClick={() => this.getPlaylistTracks()}>
            Show Playlist Tracks
            </button>
        </div>

        <div>
          <br></br>
          Top Five Tracks:
          <br></br>
          {this.state.playlistTracks.track1}
          <br></br>
          {this.state.playlistTracks.track2}
          <br></br>
          {this.state.playlistTracks.track3}
          <br></br>
          {this.state.playlistTracks.track4}
          <br></br>
          {this.state.playlistTracks.track5}
        </div>

      </div>
    )
  }
}

export default App;
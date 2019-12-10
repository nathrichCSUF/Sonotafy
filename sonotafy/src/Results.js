import React, { Component, useState } from 'react';
// import './App.css';
import Spotify from 'spotify-web-api-js';
import Navbar from './Navbar.js';
import './styles.css';
import './App.css';
const spotifyWebApi = new Spotify();
var spotifyAudio;
var i = 0;

class Results extends Component {
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
        track1pu: '',
        track2: '',
        track2pu: '',
        track3: '',
        track3pu: '',
        track4: '',
        track4pu: '',
        track5: '',
        track5pu: '',
      },
      userInput: 'sad'
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
        // console.log(response.items[0].track.preview_url);
        this.setState({
          playlistTracks: {
            track1: response.items[0].track.name,
            track1pu: response.items[0].track.preview_url,
            track2: response.items[1].track.name,
            track2pu: response.items[1].track.preview_url,
            track3: response.items[2].track.name,
            track3pu: response.items[2].track.preview_url,
            track4: response.items[3].track.name,
            track4pu: response.items[3].track.preview_url,
            track5: response.items[4].track.name,
            track5pu: response.items[4].track.preview_url,
          }
        })
      })
  }

  spotifyPlay1() {
    spotifyAudio = new Audio(this.state.playlistTracks.track1pu);
    spotifyAudio.play();
  }
  spotifyPlay2() {
    spotifyAudio = new Audio(this.state.playlistTracks.track2pu);
    spotifyAudio.play();
  }
  spotifyPlay3() {
    spotifyAudio = new Audio(this.state.playlistTracks.track3pu);
    spotifyAudio.play();
  }
  spotifyPlay4() {
    spotifyAudio = new Audio(this.state.playlistTracks.track4pu);
    spotifyAudio.play();
  }
  spotifyPlay5() {
    spotifyAudio = new Audio(this.state.playlistTracks.track5pu);
    spotifyAudio.play();
  }

  spotifyPause() {
    spotifyAudio.pause();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Navbar />
        </header>
        <div className="Body">
          <a href="http://localhost:8888">
            <button>
              Login With Spotify
              </button>
          </a>

          <div>
            <img src={this.state.nowPlaying.image} style={{ width: 100 }}>
            </img>
            <h3>Now Playing: {this.state.nowPlaying.name}</h3>
            <button onClick={() => this.getNowPlaying()}>
              Check Now Playing
            </button>
            <form>
              <p><button onClick={() => this.searchPlaylists()}>
                Search for a Playlist
  				</button>
              </p>
            </form>
          </div>

          <div>
            <h3>Search Results: {this.state.playlistResults.name}</h3>
            <button onClick={() => this.getPlaylistTracks()}>
              Show Playlist Tracks
              </button>
          </div>

          <div>

            <h3>Top Five Tracks:</h3>

            {this.state.playlistTracks.track1}
            <button onClick={() => this.spotifyPlay1()}>Play Track 1</button>
            <button onClick={() => this.spotifyPause()}>Pause Track 1</button>
            <br></br>
            {this.state.playlistTracks.track2}
            <button onClick={() => this.spotifyPlay2()}>Play Track 2</button>
            <button onClick={() => this.spotifyPause()}>Pause Track 2</button>
            <br></br>
            {this.state.playlistTracks.track3}
            <button onClick={() => this.spotifyPlay3()}>Play Track 3</button>
            <button onClick={() => this.spotifyPause()}>Pause Track 3</button>
            <br></br>
            {this.state.playlistTracks.track4}
            <button onClick={() => this.spotifyPlay4()}>Play Track 4</button>
            <button onClick={() => this.spotifyPause()}>Pause Track 4</button>
            <br></br>
            {this.state.playlistTracks.track5}
            <button onClick={() => this.spotifyPlay5()}>Play Track 5</button>
            <button onClick={() => this.spotifyPause()}>Pause Track 5</button>
          </div>
        </div>
      </div>
    )
  }
}

export default Results;

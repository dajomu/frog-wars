import React, { Component } from 'react';
import Map from './views/Map';
import MusicPlayer from './game-components/musicPlayer'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Map />
        <MusicPlayer />
      </div>
    );
  }
}

export default App;

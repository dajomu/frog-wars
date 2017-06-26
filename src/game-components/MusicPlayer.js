import React, { Component } from 'react';
import mp3_file from '../sounds/frog-music.mp3';

const MusicPlayer = function(props) {
  return (
    <audio src={mp3_file} controls autoPlay/>
  );
}
export default MusicPlayer;
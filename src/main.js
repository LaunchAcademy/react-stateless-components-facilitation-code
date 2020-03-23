import React from 'react';
import ReactDOM from 'react-dom';

import PlayList from "./components/Playlist"

let songs = [
  {artist: "Talking Heads", songName: "Found a Job", duration: "4:30"},
  {artist: "Pheonix", songName: "Entertainment", duration: "3:30"},
  {artist: "Chrome Sparks", songName: "Moonraker", duration: "6:04"}
]

ReactDOM.render(
  <PlayList songList={songs} />,
  document.getElementById('app')
);

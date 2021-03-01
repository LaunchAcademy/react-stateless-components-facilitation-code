import React from 'react';
import ReactDOM from 'react-dom';

import Playlist from "./components/Playlist"

let trackData = [
  { id: 1, title: "Found A Job", artist: "Talking Heads", playing: false, duration: "4:30" },
  { id: 2, title: "Entertainment", artist: "Phoenix", playing: false, duration: "3:40" },
  { id: 3, title: "Moonraker", artist: "Chrome Sparks", playing: true, duration: "6:04" }
];

ReactDOM.render(
    <Playlist
      trackData={trackData}
    />,
  document.getElementById('app')
);

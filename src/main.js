import React from 'react';
import ReactDOM from 'react-dom';

import Playlist from "./components/Playlist"

let trackData = [
  { id: 1, title: "Talking Heads - Found A Job", playing: false, duration: "4:30" },
  { id: 2, title: "Phoenix - Entertainment", playing: false, duration: "3:40" },
  { id: 3, title: "Chrome Sparks - Moonraker", playing: true, duration: "6:04" }
];

ReactDOM.render(
    <Playlist 
      trackData={trackData}
    />,
  document.getElementById('app')
);

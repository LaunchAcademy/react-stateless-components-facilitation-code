import React from 'react';
import ReactDOM from 'react-dom';

import "./styles/app.scss"

import Playlist from "./components/Playlist"

let trackData = [
  { id: 1, title: "Talking Heads - Found A Job", playing: false, duration: "4:30" },
  { id: 2, title: "Phoenix - Entertainment", playing: false, duration: "3:40" },
  { id: 3, title: "Chrome Sparks - Moonraker", playing: true, duration: "6:04" }
];

// let trackOne = <li className="track">
//   <i className="fas fa-play-circle"></i>
//   Talking Heads - Found A Job - 4:30
// </li>;


// debugger


// let trackTwo = <li className="track">
//   <i className="fas fa-play-circle" />
//   Phoenix - Entertainment - 3:40
// </li>;

// let trackThree = <li className="track selected">
//   <i className="fas fa-pause-circle" />
//   Chrome Sparks - Moonraker - 6:04
// </li>;


ReactDOM.render(
  <Playlist banana={trackData} />,
  document.getElementById('app')
);

  // <div>
  //   <h1>My Favorite Tracks</h1>
  //   <ul>
  //     {trackOne}
  //     {trackTwo}
  //     {trackThree}
  //   </ul> 
  // </div>
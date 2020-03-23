import React from 'react';
import ReactDOM from 'react-dom';

// let data = [
//   { id: 1, title: "Talking Heads - Found A Job", playing: false, duration: "4:30" },
//   { id: 2, title: "Phoenix - Entertainment", playing: false, duration: "3:40" },
//   { id: 3, title: "Chrome Sparks - Moonraker", playing: true, duration: "6:04" }
// ];

let trackOne = <li className="track">
  <i className="fa fa-play-circle-o" />
  Talking Heads - Found A Job - 4:30
</li>;

let trackTwo = <li className="track">
  <i className="fa fa-play-circle-o" />
  Phoenix - Entertainment - 3:40
</li>;

let trackThree = <li className="track selected">
  <i className="fa fa-pause-circle-o" />
  Chrome Sparks - Moonraker - 6:04
</li>;

ReactDOM.render(
  <ul className="tracks">
    {trackOne}
    {trackTwo}
    {trackThree}
  </ul>,
  document.getElementById('app')
);

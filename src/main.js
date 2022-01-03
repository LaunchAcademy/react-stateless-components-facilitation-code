import React from 'react';
import ReactDOM from 'react-dom';

// import Track from "./components/Track"
import Playlist from "./components/Playlist"

const data = [
  { id: 1, title: "Talking Heads - Found A Job", playing: false, duration: "4:30" },
  { id: 2, title: "Phoenix - Entertainment", playing: false, duration: "3:40" },
  { id: 3, title: "Chrome Sparks - Moonraker", playing: true, duration: "6:04" }
];


ReactDOM.render(
  <Playlist bananas={data} />,
  document.getElementById('app')
);




{/* <ul className="tracks">
  <Track
    title="Talking Heads - Found A Job"
    playing={false}
    duration="4:30"
  />
  <Track
    title="Phoenix - Entertainment"
    playing={false}
    duration="3:40"
  />
  <Track
    title="Chrome Sparks - Moonraker"
    playing={true}
    duration="6:04"
  />
</ul> */}
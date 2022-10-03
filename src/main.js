import React from "react";
import ReactDOM from "react-dom";

// import Track from "./components/Track.js"
import Playlist from "./components/Playlist.js"

const data = [
  { id: 1, title: "Sammy Rae and the Friends - Jackie Onasis", playing: false, duration: "4:30" },
  { id: 2, title: "Phoenix - Entertainment", playing: false, duration: "3:40" },
  { id: 3, title: "Chrome Sparks - Moonraker", playing: true, duration: "6:04" },
];

ReactDOM.render(
<Playlist dataSet={data}/>, 
document.getElementById("app"));

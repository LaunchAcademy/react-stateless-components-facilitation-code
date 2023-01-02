import React from "react"
import ReactDOM from "react-dom"

import Playlist from "./components/Playlist"

const data = [
  {
    id: 1,
    title: "Talking Heads - Found A Job",
    playing: false,
    duration: "4:30"
  },
  { id: 2, title: "Phoenix - Entertainment", playing: false, duration: "3:40" },
  { id: 3, title: "Chrome Sparks - Moonraker", playing: true, duration: "6:04" }
]

ReactDOM.render(<Playlist myData={data} />, document.getElementById("app"))

// const trackOne = (
//   <li className="track">
//     <i className="fas fa-play-circle" />
//     {data[0].title} - {data[0].duration}
//   </li>
// )

// const trackTwo = (
//   <li className="track">
//     <i className="fas fa-play-circle" />
//     {data[1].title} - {data[1].duration}
//   </li>
// )

// const trackThree = (
//   <li className="track selected">
//     <i className="fas fa-pause-circle" />
//     {data[2].title} - {data[2].duration}
//   </li>
// )

import React from "react"
import ReactDOM from "react-dom"

// import Track from "./components/Track.js"
import Playlist from "./components/Playlist.js"

const data = [
  {
    id: 1,
    title: "Sammy Rae and the Friends - Jackie Onasis",
    playing: false,
    duration: "4:30"
  },
  { id: 2, title: "Phoenix - Entertainment", playing: false, duration: "3:40" },
  { id: 3, title: "Chrome Sparks - Moonraker", playing: true, duration: "6:04" }
]

{/* <div>
    <Track trackData={data[0]} />
    <Track trackData={data[1]} />
    <Track trackData={data[2]} />
  </div> */}

ReactDOM.render(
  <Playlist playlistArray={data} />,
  document.getElementById("app")
)

import React from "react";

import Track from "./Track.js"

const Playlist = (props) => {
  // any logic here
  // debugger

  return (
    <div>
      <h1>Dope Tracks!!!</h1>
      <ul>
        <Track trackData={props.playlistData[0]} />
        <Track trackData={props.playlistData[1]} />
        <Track trackData={props.playlistData[2]} />
      </ul>
    </div>
  )
}

export default Playlist

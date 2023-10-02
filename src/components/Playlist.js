import React from "react"

import Track from "./Track"

const Playlist = (props) => {
  // console.log(props);
  return (
    <div>
      <Track trackData={props.playlistArray[0]} />
      <Track trackData={props.playlistArray[1]} />
      <Track trackData={props.playlistArray[2]} />
    </div>
  )
}

export default Playlist
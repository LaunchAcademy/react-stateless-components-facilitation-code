import React from "react"

import Track from "./Track"

const Playlist = (props) => {
  // any logic
  // debugger
  
  const songs = props.songsData.map((song) => {
    return (
      <Track song={song} />
    )
  })

  // const songs = props.songsData.map((song) => {
  //   return (
  //     <li className="track">
  //       <i className="fas fa-play-circle"></i>
  //       {song.title} - {song.duration}
  //     </li>
  //   )
  // })

  return (
    <>
      <h1>Playlist</h1>
      <ul>
        {songs}
      </ul>
    </>
  )
}

export default Playlist

import React from "react"

const Track = (props) => {
  let playingIcon = "fas fa-play-circle"
  if (props.trackData.playing) {
    // debugger
    playingIcon = "fas fa-pause-circle"
  }

  return (
    <li>
      <i className={playingIcon}></i>
      {props.trackData.title} - {props.trackData.duration}
    </li>
  )
}

export default Track
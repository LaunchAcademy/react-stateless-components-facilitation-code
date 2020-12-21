import React from "react"

const Track = (props) => { 
  let songSymbol
  if (props.playing === true) {
    songSymbol = "fa-pause-circle"
  } else {
    songSymbol = "fa-play-circle"
  }

  return(
    <li className="track">
      <i className={`far ${songSymbol}`}></i>
      {props.artist} - {props.title} - {props.duration}
    </li>
  )
}

export default Track
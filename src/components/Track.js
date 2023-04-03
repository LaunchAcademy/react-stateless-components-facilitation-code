import React from "react"

const Track = (props) => {
  debugger
  // any logic
  console.log(props.playing)
  let iconClass = "fa-play-circle"

  if (props.playing === true) {
    iconClass = "fa-pause-circle"
  }

  return (
    <li className="track">
      <i className={`fas ${iconClass}`}></i>
      {props.title} - {props.duration}
    </li>
  )
}

export default Track

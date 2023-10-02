import React from "react"

const Track = (props) => {
  // debugger
  console.log(props.trackData.playing);
  
  let iconClass = "fas fa-play-circle"
  if (props.trackData.playing) {
    iconClass = "fas fa-pause-circle"
  }

  return (
    <li>
      <i className={iconClass}></i>
      {props.trackData.title} ({props.trackData.duration})
    </li>
  )
}

export default Track
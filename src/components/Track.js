import React from "react"
// is responsible for displaying the information about one Track
// is like a factory for creating any Track
// REUSABLE
const Track = (props) => {
  // console.log(props.playing)
  let selectedClass = ""
  let iconClass = "fa-play-circle"

  if (props.playing) {
    selectedClass = "selected"
    iconClass = "fa-pause-circle"
  }

  return (
    <li className={`track ${selectedClass}`}>
      <i className={`fas ${iconClass}`} />
      {props.title} - {props.duration}
    </li>
  )
}

export default Track

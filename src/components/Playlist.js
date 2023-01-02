// src/components/Playlist.js
import React from "react"
import Track from "./Track.js"

const Playlist = (props) => {
  console.log("PROPS HERE!", props)
  console.log("PROPS DATA!", props.myData)
  // playlist is responsible for creating multiple Tracks
  // and rendering all of the tracks on the page

  return (
    <div>
      <h1>My Playlist</h1>
      <ul className="tracks">
        <Track
          title={props.myData[0].title}
          duration={props.myData[0].duration}
          playing={props.myData[0].playing}
        />
        <Track
          title={props.myData[1].title}
          duration={props.myData[1].duration}
          playing={props.myData[1].playing}
        />
        <Track
          title={props.myData[2].title}
          duration={props.myData[2].duration}
          playing={props.myData[2].playing}
        />
      </ul>
    </div>
  )
}

export default Playlist

// const trackOne = (
//   <li className="track">
//     <i className="fas fa-play-circle" />
//     {props.myData[0].title} - {props.myData[0].duration}
//   </li>
// )

// const trackTwo = (
//   <li className="track">
//     <i className="fas fa-play-circle" />
//     {props.myData[1].title} - {props.myData[1].duration}
//   </li>
// )

// const trackThree = (
//   <li className="track selected">
//     <i className="fas fa-pause-circle" />
//     {props.myData[2].title} - {props.myData[2].duration}
//   </li>
// )

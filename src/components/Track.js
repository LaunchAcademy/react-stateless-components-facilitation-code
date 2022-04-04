import React from 'react';

const Track = (props) => {
  // debugger

  // fa-pause-circle
  // fa-play-circle

  let playingIcon = "fa-pause-circle"
  if (props.song.playing) {
    playingIcon = "fa-play-circle"
  }

  return ( 
    <li className="track">
      <i className={`fas ${playingIcon}`}></i>
      {props.song.title} - {props.song.duration}
    </li>
  )
}

export default Track;

import React from 'react';

const Track = props => {
  let title = props.title
  let duration = props.duration
  let playing = props.playing

  let playName
  if (playing) {
    playName = "fas fa-pause-circle"
  } else {
    playName = "fas fa-play-circle"
  }
  // debugger

  return(
    <li>
      <i className={playName}></i>
      {title} - {duration}
    </li>
  )
}

export default Track;

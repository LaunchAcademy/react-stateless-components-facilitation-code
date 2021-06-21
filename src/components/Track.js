import React from 'react';

const Track = props => {
  // const songPlaying = "fas fa-pause-circle"
  // const icon = "fas fa-play-circle"
  
  let songIcon = "fas fa-play-circle"
  if (props.playing === true) {
    songIcon = "fas fa-pause-circle"
  }

  return (
    <li className="track">
      <i className={songIcon} />
      {props.title} - {props.duration}
    </li>
  )
}

export default Track;

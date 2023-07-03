import React from 'react';

const Track = (props) => {
  console.log(props);

  let playingIcon = "fa-play-circle"
  if (props.playing) {
    playingIcon = "fa-pause-circle"
  }
  
  return(
    <li className="track">
      <i className={`fas ${playingIcon}`}></i>
      {props.title} - {props.duration}
    </li>
  )
};

export default Track;

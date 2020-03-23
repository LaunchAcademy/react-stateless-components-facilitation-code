import React from 'react';

const Track = (props) => {

  return(
    <li className="track">
      <i className="fa fa-play-circle-o" />
      {props.artist} - {props.songName} - {props.duration}
    </li>
  )
}

export default Track;

import React from 'react';

const Track = (props) => {
  return(
    <li className="track">
      <i className="fas fa-play-circle"></i>
      {props.title} - {props.duration}
    </li>
  )
};

export default Track;

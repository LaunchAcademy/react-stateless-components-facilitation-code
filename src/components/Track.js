import React from 'react';

const Track = (props) => {

  let icon
  if (props.playing) {
    icon = <i className="fa fa-pause-circle-o" />;
  } else {
    icon = <i className="fa fa-play-circle-o" />;
  }

  const displayDate = (event) => {

    console.log(event)
  }

  return(
    <li className="track selected">
      {icon}
      {props.title} - {props.duration}
    </li>
  )
}

export default Track;

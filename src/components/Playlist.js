// src/components/Playlist.js
import React from 'react';
import Track from './Track.js';

const Playlist = props => {
  debugger;
  let trackOne = <Track title={props.data[0].title}
    playing={props.data[0].playing} duration={props.data[0].duration} />;

  let trackTwo = <Track title={props.data[1].title}
    playing={props.data[1].playing} duration={props.data[1].duration} />;
    
  let trackThree = <Track title={props.data[2].title}
    playing={props.data[2].playing} duration={props.data[2].duration} />;

  return(
    <ul className="tracks">
      {trackOne}
       {trackTwo}
       {trackThree}
    </ul>
  );
}

export default Playlist;

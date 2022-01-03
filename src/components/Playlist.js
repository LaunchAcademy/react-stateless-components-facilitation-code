// src/components/Playlist.js
import React from 'react';

import Track from './Track.js';

const Playlist = props => {
  const tracks = props.bananas

  const trackOne = <Track
    title={tracks[0].title}
    playing={tracks[0].playing}
    duration={tracks[0].duration}
    foo="bar"
  />

  const trackTwo = <Track
    title={tracks[1].title}
    playing={tracks[1].playing}
    duration={tracks[1].duration}
  />

  const trackThree = <Track
    title={tracks[2].title}
    playing={tracks[2].playing}
    duration={tracks[2].duration}
  />

  return(
    <ul className="tracks">
      {trackOne}  
      {trackTwo}  
      {trackThree}  
    </ul>
  )
}


export default Playlist;

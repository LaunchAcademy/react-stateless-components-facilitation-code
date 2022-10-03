// src/components/Playlist.js
import React from 'react';
import Track from './Track.js';

const Playlist = props => {

  return(
    <ul className="tracks">
      <Track 
        title={props.dataSet[0].title}
        duration={props.dataSet[0].duration} 
      />
      <Track 
        title={props.dataSet[1].title}
        duration={props.dataSet[1].duration} 
      />
      <Track 
        title={props.dataSet[2].title}
        duration={props.dataSet[2].duration} 
      />
    </ul>
  )
}

export default Playlist;

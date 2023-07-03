// src/components/Playlist.js
import React from 'react';
import Track from './Track.js';

const Playlist = (props) => {
  // console.log(props.dataSet)
  // any logic

  return(
    <div>
      <h1>{props.message}</h1>
      <ul className="tracks">
        <Track 
          // dataSet={props.dataSet}
          title={props.dataSet[0].title}
          duration={props.dataSet[0].duration}
          playing={props.dataSet[0].playing}
        />
        <Track 
          title={props.dataSet[1].title}
          duration={props.dataSet[1].duration}
          playing={props.dataSet[1].playing} 
        />
        <Track 
          title={props.dataSet[2].title}
          duration={props.dataSet[2].duration}
          playing={props.dataSet[2].playing} 
        />
      </ul>
    </div>
  )
}

export default Playlist;

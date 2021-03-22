// src/components/Playlist.js
import React from 'react';
import Track from './Track.js';

const Playlist = props => {
  // const trackData = props.trackData
// debugger
      // <li className="track">
      //   <i className="fas fa-play-circle"></i>
      //   Talking Heads - Found A Job - 4:30
      // </li>

      // <li className="track">
      //   <i className="fas fa-play-circle" />
      //   Phoenix - Entertainment - 3:40
      // </li>

      // <li className="track selected">
      //   <i className="fas fa-pause-circle" />
      //   Chrome Sparks - Moonraker - 6:04
      // </li>
  
  return(
    <ul>
      <h1>My Favorite Tracks</h1>
      
      <Track
        
        title={props.banana[0].title}
        duration={props.banana[0].duration}
        playing={props.banana[0].playing}
      />
      
      <Track
        artist="Pheonix"
        title="Entertainment"
        duration="3:40"
        playing={false}
      />
      
      <Track
        artist="Chrome Sparks"
        title="Moonraker"
        duration="6:04"
        playing={true}
      />
    </ul>
  )
}

export default Playlist;

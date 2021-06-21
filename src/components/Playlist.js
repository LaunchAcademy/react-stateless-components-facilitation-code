// src/components/Playlist.js
import React from 'react';
import Track from './Track.js';

const Playlist = props => {
  const trackData = props.trackData

  return(
    <ul>
      <Track
        artist={trackData[0].artist}
        title={trackData[0].title}
        duration={trackData[0].duration}
        playing={trackData[0].playing}
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

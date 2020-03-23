import React from 'react';

import Track from  "./Track"

const Playlist = props => {
  let songs = props.songList

  return(
    <ul className="tracks">
      <Track
        artist={songs[0].artist}
        songName={songs[0].songName}
        duration={songs[0].duration}
      />
      <Track
        artist={songs[1].artist}
        songName={songs[1].songName}
        duration={songs[1].duration}
      />
      <Track
        artist={songs[2].artist}
        songName={songs[2].songName}
        duration={songs[2].duration}
      />
    </ul>
  )
}

export default Playlist;

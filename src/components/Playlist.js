// src/components/Playlist.js
import React from 'react';
import Track from './Track.js';

const Playlist = props => {
  const trackCollection = props.songData.map((song) => {
    // debugger

    // let songIcon = "fas fa-play-circle"
    // if (song.playing === true) {
    //   songIcon = "fas fa-pause-circle"
    // }

    // songIcon={songIcon}
    return (
      <Track 
        key={song.id}
        title={song.title}
        playing={song.playing}
        duration={song.duration}
      />
    )
  })
  // debugger
  // console.log(trackCollection)
  // [<Track track={data[0]} />, <Track track={data[1]} />, <Track />]
  return (
    <div>
      <h1>My Playlists</h1>
      {trackCollection}
    </div>
  )
}

export default Playlist;

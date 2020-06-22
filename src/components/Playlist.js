// src/components/Playlist.js
import React from 'react';
import Track from './Track.js';

const Playlist = props => {
  let songs = props.songs
  // debugger

  const songComponents = songs.map((song) => {
    return <Track />
  })
let trackOne = 
  <Track 
    title={songs[0].title}
    duration={songs[0].duration}
    playing={songs[0].playing}
  />;

let trackTwo = 
  <Track 
    title={songs[1].title}
    duration={songs[1].duration}
    playing={songs[1].playing}
  />;

let trackThree = 
  <Track 
    title={songs[2].title}
    duration={songs[2].duration}
    playing={songs[2].playing}
  />;

  return(
  <ul className="tracks">
   {trackOne}
   {trackTwo}
   {trackThree}
  </ul>
  )
}

export default Playlist;

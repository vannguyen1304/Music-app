import React from "react";

const SongDetail = ({ song }) => {
  console.log(song);
  return (
    <div className="song-detail">
      <span className="song-desc">Now playing</span>
      <h4>{song.name}</h4>
      <div className="img-container">
        <img src={song.links.images[0].url}></img>
        <div className="img-info">
          <img src={song.links.images[0].url}></img>
          <span className="song-witer">{song.author}</span>
        </div>
      </div>
    </div>
  );
};

export default SongDetail;

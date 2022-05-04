import React from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

const Playing = ({ song, handleSong }) => {
  const handleClickNext = () => {
    // console.log("next");
    handleSong(song.id + 1);
  };

  const handleClickPre = () => {
    handleSong(song.id - 1);
  };

  const handleEnded = () => {
    handleSong(song.id + 1);
  };
  return (
    <AudioPlayer
      className="player-music"
      src={song.url}
      layout="stacked-reverse"
      showSkipControls={true}
      showJumpControls={false}
      onClickNext={handleClickNext}
      onClickPrevious={handleClickPre}
      onEnded={handleEnded}
    />
  );
};

export default Playing;

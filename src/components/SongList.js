import React, { useEffect, useState } from "react";

const SongList = ({ data, handleSong, song }) => {
  //   console.log(data);
  const [idSong, setIdSong] = useState(0);

  const handlePlayMusic = (id) => {
    setIdSong(id);
    handleSong(id);
  };

  useEffect(() => {
    setIdSong(song.id);
  }, [song]);
  return (
    <div className="song-list">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Song</th>
            <th scope="col">Title</th>
            <th scope="col">
              <i className="fa-solid fa-download"></i>
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((song, index) => {
            return (
              <tr
                key={index}
                onClick={() => handlePlayMusic(song.id)}
                className={idSong == song.id ? "text-active" : ""}
              >
                <th scope="row">{index + 1}</th>
                <td className="song-name">{song.name}</td>
                <td>{song.author}</td>
                <td>
                  <a href={song.url}>
                    <i className="fa-solid fa-download white-color"></i>
                  </a>
                </td>
              </tr>
            );
          })}
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default SongList;

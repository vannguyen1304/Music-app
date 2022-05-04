import "./App.css";
import Navbar from "./components/Navbar";
import SongDetail from "./components/SongDetail";
import SongList from "./components/SongList";
import data from "./Data";
import Playing from "./components/Playing";
import { useState } from "react";

function App() {
  const [song, setSong] = useState(data[0]);
  const handleSong = (id) => {
    if (id < 0) {
      id = 0;
    }
    const song2 = data.find((song, index) => {
      return song.id == id;
    });
    setSong(song2);
  };

  return (
    <div className="App">
      <Navbar />
      <div id="song-display" className="container-fruid">
        <div className="row">
          <div className="col-4">
            <SongDetail song={song} />
          </div>
          <div className="col-8">
            <SongList data={data} handleSong={handleSong} song={song} />
          </div>
        </div>
      </div>
      <div className="playing">
        <Playing song={song} handleSong={handleSong} />
      </div>
    </div>
  );
}

export default App;

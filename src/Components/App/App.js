import React, {useState, useEffect, useCallback} from "react";
import "./App.css";

import Spotify from "../../util/Spotify"
import SearchBar from '../SearchBar/SearchBar'

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [playlistName, setPlaylistName] = useState('New Playlist');
  const [playlistTracks, setPlaylistTracks] = useState([]);

  const search =  useCallback(async (term) => {
    const trackArray = await Spotify.search(term)
    setSearchResults(trackArray)
  });
  
  return (
    <div className="App">
      <SearchBar onSearch={search}/>
      <ul>
        {searchResults.map(track => <li>{track.name}</li>)}
      </ul>
    </div>
  );
}

export default App;

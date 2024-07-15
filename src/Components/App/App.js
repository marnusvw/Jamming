import React, {useState, useEffect, useCallback} from "react";
import "./App.css";

import Spotify from "../../util/Spotify"
import SearchBar from '../SearchBar/SearchBar'
import SearchResults from '../SearchResults/SearchResults'

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [playlistName, setPlaylistName] = useState('New Playlist');
  const [playlistTracks, setPlaylistTracks] = useState([]);

  const search =  useCallback(async (term) => {
    const trackArray = await Spotify.search(term)
    setSearchResults(trackArray)
  });
  
  const addTrack = useCallback((track) => {
    if (playlistTracks.some((savedTrack) => savedTrack === track.id))
      return;

    setPlaylistTracks((prevTracks) => [...prevTracks, track])
  }, [])

  return (
    <div className="App">
      <SearchBar onSearch={search}/>
      <div>
      <SearchResults searchResults={searchResults} onAdd={addTrack}/>
      </div>
    </div>
  );
}

export default App;

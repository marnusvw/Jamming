import React, { useState, useEffect, useCallback } from "react";
import "./App.css";

import Spotify from "../../util/Spotify";
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import Playlist from "../Playlist/Playlist";

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [playlistName, setPlaylistName] = useState("New Playlist");
  const [playlistTracks, setPlaylistTracks] = useState([]);

  const search = useCallback(async (term) => {
    const trackArray = await Spotify.search(term);
    setSearchResults(trackArray);
  });

  const addTrack = useCallback((track) => {
    if (playlistTracks.some((savedTrack) => savedTrack === track.id)) return;

    setPlaylistTracks((prevTracks) => [...prevTracks, track]);
  }, []);

  const removeTrack = useCallback((track) =>{
    setPlaylistTracks((prevTracks) => prevTracks.filter((currenTrack) => currenTrack.id !== track.id))
  }, []);

  const updatePlaylistName = useCallback((name) => {
    setPlaylistName(name);
  }, []);

  const savePlaylist = useCallback(() => {
    const trackUris = playlistTracks.map((track) => track.uri);
    Spotify.savePlaylist(playlistName, trackUris  ).then(() => {
      setPlaylistName('New Playlist');
      setPlaylistTracks([]);
     
    }, [playlistName, playlistTracks])
    
  });
  return (
    <div className="App">
      <SearchBar onSearch={search} />
      <div>
        <SearchResults searchResults={searchResults} onAdd={addTrack} />
        <Playlist
          playlistName={playlistName}
          playlistTracks={playlistTracks}
          onNameChange={updatePlaylistName}
          onRemove={removeTrack}
          onSave={savePlaylist}
        />
      </div>
    </div>
  );
}

export default App;

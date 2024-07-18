import React, { useState, useEffect, useCallback } from "react";
import TrackList from "../TrackList/TrackList";
import './Playlist.css'
const Playlist = (props) => {
  const handleTextChange = useCallback(
    (e) => {
      props.onNameChange(e.target.value);
    },
    [props.onNameChange]
  );
  const clearFields = () => {
    document.getElementById('nameList').value = '';
  }
  return (
    <div className="playlist">
      <input ref={props.inputRef} id="nameList" className="namePlaylist" defaultValue={"New Playlist"} onChange={handleTextChange}></input>
      <TrackList
        tracks={props.playlistTracks}
        onRemove={props.onRemove}
        isRemoval={true}
      />
      <button className="savePlaylistBtn" onClick={() => {props.onSave()}}>Save Playlist</button>
    </div>
  );
};

export default Playlist;

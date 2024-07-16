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
    <div >
      <input ref={props.inputRef} id="nameList" className="namePlaylist" defaultValue={"New Playlist"} onChange={handleTextChange}></input>
      <button className="savePlaylist" onClick={() => {props.onSave(); clearFields()}}>Save Playlist</button>
      <TrackList
        tracks={props.playlistTracks}
        onRemove={props.onRemove}
        isRemoval={true}
      />
    </div>
  );
};

export default Playlist;

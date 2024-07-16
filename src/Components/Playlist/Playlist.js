import React, { useState, useEffect, useCallback } from "react";
import TrackList from "../TrackList/TrackList";

const Playlist = (props) => {
  const handleTextChange = useCallback(
    (e) => {
      props.onNameChange(e.target.value);
    },
    [props.onNameChange]
  );
  const clearFields = () => {
    document.getElementById('saveList').value = '';
  }
  return (
    <div>
      <input id="saveList" className="savePlaylist" defaultValue={"New Playlist"} onChange={handleTextChange}></input>
      <TrackList
        tracks={props.playlistTracks}
        onRemove={props.onRemove}
        isRemoval={true}
      />
      <button onClick={() => {props.onSave(); clearFields()}}>Save Playlist</button>
    </div>
  );
};

export default Playlist;

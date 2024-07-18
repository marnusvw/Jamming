import React, { useState, useEffect } from "react";
import "./SearchResults.css";
import TrackList from "../TrackList/TrackList";

const SearchResults = (props) => {
  return (
    <div className="searchResults">
      {props.searchResults.length > 0 && (
        <div className="results">
          <h2>Results</h2>
        </div>
      )}
      <TrackList tracks={props.searchResults} onAdd={props.onAdd} />
    </div>
  );
};
export default SearchResults;

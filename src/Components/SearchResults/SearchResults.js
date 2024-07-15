import React, { useState, useEffect } from "react";

import TrackList from "../TrackList/TrackList";

const SearchResults = (props) => {
  return (
    <div className="SearchResults">
      {props.searchResults.length > 0 && <h2>Results</h2>}
      <TrackList tracks={props.searchResults} onAdd={props.onAdd} />
    </div>
  );
};
export default SearchResults;

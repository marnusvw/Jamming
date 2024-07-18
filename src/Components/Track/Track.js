import React, { useCallback } from "react";

import "./Track.css";

const Tracks = (props) => {
  const onAdd = useCallback(() => {
    props.onAdd(props.track);
  }, [props.onAdd, props.track]);
  const onRemove = useCallback(() => {
    props.onRemove(props.track);
  }, [props.onRemove, props.track]);
  const renderAction = () => {
    if (props.isRemoval) {
      return (
        <button className="removeBtn" onClick={onRemove}>
          - 
        </button>
      );
    } else {
      return (
        <div>
          <button className="addBtn" onClick={onAdd}>
            +
          </button>
        </div>
      );
    }
  };
  return (
    <div className="trackCard">
      <div className="trackInfo">
        <h3>{props.track.name}</h3>
        <p>
          {props.track.artist} | {props.track.album}
        </p>
      </div>
      {renderAction()}
    </div>
  );
};

export default Tracks;

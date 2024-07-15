import React, {useState, useEffect} from "react";

const Tracks = (props) => {
    const onAdd = () => {
        props.onAdd(props.track)
    }
    return (
        <div>
            <h3>{props.track.name}</h3>
            <p>{props.track.artist} | {props.track.album}</p>
        </div>
    )
}

export default Tracks;
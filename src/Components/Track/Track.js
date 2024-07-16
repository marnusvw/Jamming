import React, {useState, useEffect, useCallback} from "react";

const Tracks = (props) => {
    const onAdd = useCallback(() => {
        props.onAdd(props.track)
    }, [props.onAdd, props.track])
    const onRemove = useCallback(() =>{
        props.onRemove(props.track)
    }, [props.onRemove, props.track])
    const renderAction = () => {
        if (props.isRemoval){
            return (
                <button onClick={onRemove}>Delete</button>
            )
        }
        else {
            return (
                <button onClick={onAdd}>Add</button>
            )
        }
    }
    return (
        <div>
            <h3>{props.track.name}</h3>
            <p>{props.track.artist} | {props.track.album}</p>
            {renderAction()}
        </div>
    )
}

export default Tracks;
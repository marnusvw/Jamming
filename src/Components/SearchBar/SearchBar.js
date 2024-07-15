import React, {useState, useEffect, useCallback} from "react";

const SearcBar = (props) => {
    const [term, setTerm] = useState('')

    const handleTextChange = useCallback((event) => {
        setTerm(event.target.value)
    }, []);

    const search = useCallback(() => {
        props.onSearch(term)
    }, [props.onSearch, term])

    return (
        <div>
            <input placeholder="Enter a Song Title" value={term} type="text" onChange={handleTextChange}></input>
            <button onClick={search}>Search</button>
        </div>
    )
}
export default SearcBar;
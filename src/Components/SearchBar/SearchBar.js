import React, {useState, useEffect, useCallback, useRef} from "react";
import './SearchBar.css'

const SearchBar = (props) => {
    const [term, setTerm] = useState('')
    
    const handleTextChange = useCallback((event) => {
        setTerm(event.target.value)
    }, []);
    
    const search = useCallback(() => {
        props.onSearch(term)
    }, [props.onSearch, term])

    return (
        <div className="searchBar">
            <input autoFocus className="searchField" placeholder="Enter a Song Title" value={term} type="text" onChange={handleTextChange}></input>
            <button className="searchBtn" onClick={() => {search(); props.onHandleClick()}}>Search</button>
        </div>
    )
}
export default SearchBar;
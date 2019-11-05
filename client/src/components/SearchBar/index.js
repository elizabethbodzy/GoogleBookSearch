import React from "react";
import "./style.css"

function SearchBar(props) {
    return (
        <div className="input-group col-6 search">
            <input className="form-control py-2  border" type="search" placeholder="Enter a Book to Search" name="search" onChange={(event) => props.handleSearchChange(event)}/>
        </div>
    )
};

export default SearchBar;
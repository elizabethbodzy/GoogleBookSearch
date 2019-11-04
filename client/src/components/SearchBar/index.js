import React from "react";
import "./style.css"

function SearchBar() {
    return (
        <div className="input-group col-6 search">
            <input className="form-control py-2  border" type="search" placeholder="Enter a Book to Search" id="searchbar" />
        </div>
    )
};

export default SearchBar;
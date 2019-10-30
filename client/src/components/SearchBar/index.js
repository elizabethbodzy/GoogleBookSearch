import React from "react";
import "./style.css"

function SearchBar() {
    return (
        <div className="input-group col-6 search">
            <input className="form-control py-2 border-right-0 border" type="search" placeholder="Search by Book Topic" id="searchbar" />
            <span className="input-group-append">
                <button className="btn btn-outline-secondary border-left-0 border" type="button">
                    <i className="fa fa-search"></i>
                </button>
            </span>
        </div>
    )
};

export default SearchBar;
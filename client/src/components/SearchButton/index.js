import React from "react";
import "./style.css"


function SearchButton (props) {
    alert("yo");
    return (
        <div className="form-group row mt-2 mx-auto">
            <div className="col-6 submit">
                <button type="submit" className="btn btn-secondary" id="searchButton" onClick={(event) => props.yo(event)}>Search Books </button>
            </div>
        </div>
    )
};

export default SearchButton;
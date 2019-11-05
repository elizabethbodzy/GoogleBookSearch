import React from "react";
import SearchBar from "../SearchBar";
import SearchButton from "../SearchButton";
import SearchForm from "../SearchForm";


function SearchDiv (props) {
    // console.log(props);
    return (
        <div>
            <SearchForm>
                <SearchBar handleSearchChange={props.handleSearchChange} />
                <SearchButton searchBook={props.searchBook} />
            </SearchForm>
        </div>
    )
};

export default SearchDiv;
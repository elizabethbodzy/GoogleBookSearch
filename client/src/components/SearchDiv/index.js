import React from "react";
import SearchBar from "../components/SearchBar";
import SearchButton from "../components/SearchButton";
import SearchForm from "../components/SearchForm";
import "./style.css";

function SearchDiv (props) {
    return (
        <div>
            <SearchForm>
                <SearchBar />
                <SearchButton searchBooks={props.searchBooks} />
            </SearchForm>
        </div>
    )
};

export default SearchDiv;
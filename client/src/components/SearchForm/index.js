import React from "react";

function SearchForm({ children }) {
    return (
        <div className="form-container">
            <form className="form">
                { children }
            </form>
        </div>
    )
}

export default SearchForm;
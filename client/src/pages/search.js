import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import { Container } from "../components/Grid";
// import API from "../utils/API";
import SearchDiv from "../components/SearchDiv";
// import SearchResults from "../components/SearchResults";

class Search extends Component {
    state = {
        search: "",
        books: [],
        error: ""
    }


    render() {
        return (
            <Container fluid>
            <Jumbotron>
                <div className="container">
                <h1 className="title">Google Book Search </h1> 
                <h2 className="description"> Search and Save Books</h2>
                </div>
            </Jumbotron>
            <Container>
                <SearchDiv />
            </Container>
            </Container>

        );
    }

}

export default Search;


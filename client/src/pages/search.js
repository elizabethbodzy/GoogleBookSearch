import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import { Container } from "../components/Grid";
import SearchDiv from "../components/SearchDiv";
import API from "../utils/API";
import SearchResults from "../components/SearchResults";

class Search extends Component {
    state = {
        search: "",
        books: [],
        results: [],
        error: ""
    }

    handleSearchChange = (event) => {
        // console.log(event.target.value);
        this.setState({ search: event.target.value});
    }

    searchBooks = (event) => {
        // alert("yo");
        event.preventDefault();
        // console.log(this.state.search)
        // let searchBook = document.getElementById("searchbar").value;
        API.getGoogleBookSearch(this.state.search)
        .then((result) => {
            // console.log(result.data)
            this.setState({ results: result.data.items})
        })
        .catch(err =>  
                console.log(err));    
     
        
    };


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
                <SearchDiv handleSearchChange = {this.handleSearchChange} searchBook = {this.searchBooks}/>
                <SearchResults results={this.state.results} saveBook ={this.saveBook} />
            </Container>
            </Container>

        );
    }

}

export default Search;


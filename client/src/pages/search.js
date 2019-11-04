import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import { Container } from "../components/Grid";
import SearchDiv from "../components/SearchDiv";
import API from "../utils/API";
// import SearchResults from "../components/SearchResults";

class Search extends Component {
    state = {
        search: "",
        books: [],
        results: [],
        error: ""
    }


    searchBooks = (event) => {
        alert("yo");
        event.preventDefault();
        let searchBook = document.getElementById("searchbar").value;
        API.getBooks(searchBook)
        .then((result) => {
            let results = result.data.items;
            // console.log(results);
            results = results.map((result) => {
                let book = {
                    id: result.id,
                    title: result.volumeInfo.title,
                    authors: result.volumeInfo.authors,
                    image: result.volumeInfo.imageLinks.thumbnail,
                    description: result.volumeInfo.description,
                    link: result.volumeInfo.infoLink
                };
                return book;
            });
            this.setState({ results: results });
        }).catch(err =>  
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
                <SearchDiv searchBook = {this.searchBooks}/>
                {/* <SearchResults results={this.state.results} saveBook ={this.saveBook} /> */}
            </Container>
            </Container>

        );
    }

}

export default Search;


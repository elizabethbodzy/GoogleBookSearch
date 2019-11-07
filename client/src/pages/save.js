import React, { Component } from "react";
import API from "../utils/API";
import { Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import SavedCard from "../components/SavedBooks";

class SaveBooks extends Component {
    state = {
        results: []
    };

    componentDidMount () {
        this.savedBooks();
    }

    handleSearchChange = (event) => {
        // console.log(event.target.value);
        this.setState({ search: event.target.value});
    }

    savedBooks = (event) => {
        // alert("yo");
        // event.preventDefault();
        // console.log(this.state.search)
        // let searchBook = document.getElementById("searchbar").value;
        API.getBooks()
        .then((result) => {
            console.log(result.data)
            this.setState({ results: result.data})
        })
        .catch(err =>  
                console.log(err));    
     
        
    };

    removeBook = (id) => {
        API.deleteBook(id)
        .then(() => { this.deleteBook() })
        .catch(err =>
            console.log(err));
    };


    render() {
        console.log(this.state.results)
        return (
            
            <Container fluid>
            <Jumbotron>
                <div className="container">
                <h1 className="title">Google Book Search </h1> 
                <h2 className="description"> Search and Save Books</h2>
                </div>
            </Jumbotron>
            <Container>
                <SavedCard saved={this.state.results} removeBook ={this.removeBook} />
            </Container>
            </Container>

        );
    }
}


export default SaveBooks;
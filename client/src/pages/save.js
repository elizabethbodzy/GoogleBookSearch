import React, { Component } from "react";
import API from "../utils/API";
import { Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
// import SavedBooks from "../components/SavedBooks";

class SaveBooks extends Component {
    state = {
        results: []
    };

    getBooks = () => {
        API.getBooks()
        .then((data) => {
            return this.setState({ results: data.data});        
        })
        .catch(err =>
            console.log(err));
    };

    removeBook = (id) => {
        API.deleteBook(id)
        .then(() => { this.getBooks() })
        .catch(err =>
            console.log(err));
    };

    componentDidMount() {
        this.getBooks();
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
                {/* <SavedBooks saved={this.state.results} removeBook ={this.removeBook} /> */}
            </Container>
            </Container>

        );
    }
}


export default SaveBooks;
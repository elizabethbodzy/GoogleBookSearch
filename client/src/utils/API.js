import axios from "axios";
const SEARCH_URL = "https://www.googleapis.com/books/v1/volumes?q=";

export default {
    //Gets the book with the given query
    getGoogleBookSearch: function(query) {
        return axios.get(SEARCH_URL + query);
    },

    //get all books
    getBooks: function() {
        return axios.get("/api/books");
    },

    //Gets the book with the given id
    getBook: function(id) {
        return axios.get("/api/books/" + id)
    },

    //saves book to db
    saveBook: function(savedBookData) {
        return axios.post("/api/books", savedBookData)
    },

    // Deletes the book with the given id
    deleteBook: function(id) {
        return axios.delete("/api/books/" + id)
    }
}
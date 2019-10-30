import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Saved from "./pages/Save";
import Search from "./pages/Search";
import NotFound from "./pages/notFound";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Jumbotron from './components/Jumbotron';
import SearchBar from './components/SearchBar';
import SearchButton from './components/SearchButton';

// import logo from './logo.svg';
import './App.css';


function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Jumbotron />
        <SearchBar /> 
        <SearchButton />
        <Switch> 
        {/* <Route exact path = "/" component = {Search} />
          <Route exact path = "/books" component = {Saved} /> 
           <Route exact path = "/books/:id" component = {Saved} /> 
           <Route component = {NotFound} /> */}
        </Switch> 
        <Footer />
        
      </div>
    </Router>
   
  );
}

export default App;

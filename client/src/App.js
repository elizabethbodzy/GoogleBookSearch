import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Saved from "./pages/Save";
import Books from "./pages/Search";
import NotFound from "./pages/notFound";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    // <Router>
      <div>
        <NavBar />
        {/* <Switch>
        <Route exact path = "/" component = {Books} />
          <Route exact path = "/books" component = {Books} />
          <Route exact path = "/books/:id" component = {Saved} />
          <Route component = {NotFound} />
        </Switch> */}
        <Footer />
        
      </div>
    // </Router>
   
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Search from "./pages/Search";
import Saved from "./pages/Save";
import NotFound from "./pages/NotFound";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

// import logo from './logo.svg';
import './App.css';


function App() {
  
  return (
    <Router>
      <div>
        <NavBar />

        <Switch>
          <Route exact path="/" component={Search} />
          <Route exact path="/saved" component={Saved} />
          <Route component={NotFound} />
        </Switch>
        <Footer />

      </div>
    </Router>

  );
}

export default App;

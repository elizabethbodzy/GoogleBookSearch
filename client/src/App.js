import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import SaveBooks from "./pages/Save";
import SaveBooks from "./pages/Save";
import Search from "./pages/Search";
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
          <Route exact path="/saved" component={SaveBooks} />
          <Route exact path="/saved/:id" component={SaveBooks} />
          <Route component={NotFound} />
        </Switch>
        <Footer />

      </div>
    </Router>

  );
}

export default App;

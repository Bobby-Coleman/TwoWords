import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom"
import './App.css';

import Navbar from "./components/navbar";
import Notebook from "./components/notebook/notebook";
import About from "./components/about/about";

const App = () => {
  return (
    <Router>
      <div className="App">
        <div className="App-navbar">
          <Navbar />
        </div>
        <Route path="/notebook" exact component={Notebook} />
        <Route path="/about" exact component={About} />
      </div>
    </Router>
  );
}

export default App;

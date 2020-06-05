import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom"
import './App.css';

import Navbar from "./components/navbar/navbar";
import Notebook from "./components/notebook/notebook";
import About from "./components/about/about";
import Login from "./components/login/login";
import Signup from "./components/signup/signup";

const App = () => {
  return (
    <Router>
      <div className="App">
        <div className="App-navbar">
          <Navbar />
        </div>
        <Route path="/notebook" exact component={Notebook} />
        <Route path="/about" exact component={About} />
        <Route path="/login" exact component={Login} />
        <Route path="/signup" exact component={Signup} />
        App
      </div>
    </Router>
  );
}

export default App;

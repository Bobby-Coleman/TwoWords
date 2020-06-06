import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom"
import './App.css';

import Home from "./components/home/home";
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
        <Route path="/" exact component={Home} />
        <Route path="/notebook" exact component={Notebook} />
        <Route path="/about" exact component={About} />
        <Route path="/login" exact component={Login} />
        <Route path="/signup" exact component={Signup} />
      </div>
      <footer>
          Copyright Ⓒ Bobby Coleman, 2020 
          <div className="footer-right">
          Until the robots take over, enjoy!
          </div>
      </footer>
    </Router>
  );
}

export default App;

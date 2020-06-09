import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom"
import './App.css';

import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Notebook from "./components/Notebook/Notebook";
import About from "./components/About/About";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";



const App = () => {
  return (
    <Router>
      <div className="App">
        <div className="App-navbar">
          <Navbar />
        </div>
        <main className="App-main">
          <Route path="/" exact component={Home} />
          <Route path="/notebook" exact component={Notebook} />
          <Route path="/about" exact component={About} />
          <Route path="/login" exact component={Login} />
          <Route path="/signup" exact component={Signup} />
        </main>
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

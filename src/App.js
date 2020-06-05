import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom"
import './App.css';

import Navbar from "./components/navbar";
import Notebook from "./components/notebook/notebook";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Route path="/notebook" exact component={Notebook} />
      </div>
    </Router>
  );
}

export default App;

import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom"
import './App.css';

import Home from "../../components/Home/Home";
import Navbar from "../../components/Navbar/Navbar";
import Notebook from "../../components/Notebook/Notebook";
import About from "../../components/About/About";
import Login from "../../components/Login/Login";
import SignupPage from "../SignupPage/SignupPage";
import SideDrawer from '../../components/SideDrawer/SideDrawer';
import Backdrop from '../../components/Backdrop/Backdrop';
import userService from '../../utils/userService'


class App extends Component {

  state = {
    sideDrawerOpen: false,
    user: userService.getUser(),
  };

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return {sideDrawerOpen: !prevState.sideDrawerOpen};
    });
  };

  backdropClickHandler = () => {
    this.setState({sideDrawerOpen: false})
  };

  render() {
    let sideDrawer;
    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />
    }

   return (
     <Router>
       <div className="App">
         <div className="App-navbar">
           <Navbar drawerClickHandler={this.drawerToggleClickHandler} />
         </div>
         <SideDrawer show={this.state.sideDrawerOpen} />
         {sideDrawer}
         {backdrop}
         <main className="App-main">
           <Route path="/" exact component={Home} />
           <Route path="/notebook" exact component={Notebook} />
           <Route path="/about" exact component={About} />
           <Route path="/login" exact component={Login} />
           <Route path="/signup" exact component={SignupPage} />
         </main>
       <footer>
           Copyright Ⓒ Bobby Coleman, 2020 
           <div className="footer-right">
           Until robots take over, enjoy!
           </div>
       </footer>
       </div>
     </Router>
   );
 }
}

export default App;

import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom"
import './App.css';

import HomePage from "../HomePage/HomePage";
import Navbar from "../../components/Navbar/Navbar";
import Notebook from "../../components/Notebook/Notebook";
import About from "../../components/About/About";
import LoginPage from "../LoginPage/LoginPage";
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

  handleLogout = () => {
    userService.logout();
    this.setState({ user: null });
  };

  handleSignupOrLogin = () => {
    this.setState({ user: userService.getUser() });
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
           <Navbar 
           drawerClickHandler={this.drawerToggleClickHandler}
           user={this.state.user}
           handleLogout={this.handleLogout}
           />
         </div>
         <SideDrawer 
         show={this.state.sideDrawerOpen} 
         user={this.state.user}
         handleLogout={this.handleLogout}
         />
         {sideDrawer}
         {backdrop}
         <main className="App-main">
           <Route path="/" exact component={HomePage} />
           <Route path="/notebook" exact component={Notebook} />
           <Route path="/about" exact component={About} />
           <div className="register">
           <Route exact path='/login' render={({ history }) =>
              <LoginPage
                history={history}
                handleSignupOrLogin={this.handleSignupOrLogin}
              />
            }/>
           <Route exact path='/signup' render={({ history }) =>
              <SignupPage
                history={history}
                handleSignupOrLogin={this.handleSignupOrLogin}
              />
            }/>
           </div>
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

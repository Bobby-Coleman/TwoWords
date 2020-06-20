import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom"
import './App.css';

import HomePage from "../HomePage/HomePage";
import Navbar from "../../components/Navbar/Navbar";
import NotebookPage from "../NotebookPage/NotebookPage";
import TwoWordsPage from "../TwoWordsPage/TwoWordsPage";
import LoginPage from "../LoginPage/LoginPage";
import SignupPage from "../SignupPage/SignupPage";
import SideDrawer from '../../components/SideDrawer/SideDrawer';
import Backdrop from '../../components/Backdrop/Backdrop';
import userService from '../../utils/userService'
import entriesService from '../../utils/entriesService'


class App extends Component {

  state = {
    sideDrawerOpen: false,
    user: userService.getUser(),
    entries: [],
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

  // CRUD services

  handleAddEntry = async newEntryData => {
    const newEntry = await entriesService.create(newEntryData)
    this.setState(prevState => ({
      entries: [...prevState.entries, newEntry]
    }))
  }

  handleDeleteEntry = async entryId => {
    await entriesService.deleteOne(entryId)
    this.setState(prevState => ({
      entries: prevState.entries.filter(entry => entry._id !==entryId)
    }))
  }

  async componentDidMount() {
    const entries = await entriesService.index()
    this.setState({ entries })
  }

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
           <Route exact path='/notebook' render={() =>
            userService.getUser() ? 
              <NotebookPage
                user={this.state.user}
                entries={this.state.entries}
                handleDeleteEntry={this.handleDeleteEntry}
              />
              :
            <Redirect to='/login' />
            }/>
           <Route exact path='/two-words' render={() =>
              <TwoWordsPage 
                handleAddEntry={this.handleAddEntry}
                user={this.state.user}
              />
            }/>
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

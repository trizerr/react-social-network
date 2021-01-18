import './App.scss';
import React , { Component }from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import {Route} from "react-router-dom";
import UsersContainerr from "./components/Users/UsersContainerr";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import MessagesContainer from "./components/Messages/MessagesContainer";
import LoginContainer from "./components/Login/LoginContainer";

const App = (props) => {
  return(

    <div className="app-wrapper">
      <HeaderContainer />
      <Sidebar />
      <main className="app-wrapper-content">
              <Route path='/profile/:userId?' render={() => (
                  <ProfileContainer />
              )}/>

              <Route path='/messages' render={() => (
                  <MessagesContainer />
              )}/>
              <Route exact path='/' render={() => (
                  <ProfileContainer />
              )}/>
              <Route exact path='/find' render={() => (
                  <UsersContainerr />
              )}/>
              <Route exact path='/login' render={() => (
                  <LoginContainer />
              )}/>
      </main>
    </div>

  );
}

export default App;

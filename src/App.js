import logo from './logo.svg';
import './App.scss';
import React , { Component }from "react";
import back from './img/back.jpg'
import logonew from './img/logo.png'
import avatar from './img/avatar.png'
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Profile from "./components/Profile/Profile";
import Users from "./components/Users/Users";
import s from "./components/Profile/Profile.module.scss";
import {BrowserRouter, Switch} from "react-router-dom";
import {Route} from "react-router-dom";
import Messages from "./components/Messages/Messages";
import UsersContainerr from "./components/Users/UsersContainerr";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";

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
                  <Messages />
              )}/>
              <Route exact path='/' render={() => (
                  <ProfileContainer />
              )}/>
              <Route exact path='/find' render={() => (
                  <UsersContainerr />
              )}/>
      </main>
    </div>

  );
}

export default App;

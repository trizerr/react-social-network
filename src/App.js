import logo from './logo.svg';
import './App.scss';
import React , { Component }from "react";
import back from './img/back.jpg'
import logonew from './img/logo.png'
import avatar from './img/avatar.png'
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Profile from "./components/Profile/Profile";
import s from "./components/Profile/Profile.module.scss";
import {BrowserRouter, Switch} from "react-router-dom";
import {Route} from "react-router-dom";
import Messages from "./components/Messages/Messages";

const App = (props) => {

  return(
      <BrowserRouter>
    <div className="app-wrapper">
      <Header />
      <Sidebar />
      <main className="app-wrapper-content">
              <Route path='/profile' render={() => (
                  <Profile state={props.state.profilePage}
                           dispatch={props.dispatch}/>
              )}/>
              <Route path='/messages' render={() => (
                  <Messages state={props.state.messagePage} dispatch={props.dispatch}/>
              )}/>
              <Route exact path='/' render={() => (
                  <Profile state={props.state.profilePage}
                           dispatch={props.dispatch}/>
              )}/>
      </main>
    </div>
      </BrowserRouter>
  );
}

export default App;

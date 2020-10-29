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

const App = () => {
  return(
      <BrowserRouter>
    <div className="app-wrapper">
      <Header />
      <Sidebar />
      <main className="app-wrapper-content">
        <Switch>
              <Route path='/profile' component={Profile}/>
              <Route path='/messages' component={Messages}/>
              <Route path='/' component={Profile}/>
        </Switch>
      </main>
    </div>
      </BrowserRouter>
  );
}

export default App;

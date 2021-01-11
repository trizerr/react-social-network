import './App.scss';
import React , { Component }from "react";
import Sidebar from "./components/Sidebar/Sidebar";
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

import logo from './logo.svg';
import './App.css';
import React from "react";
import back from './img/back.jpg'
import logonew from './img/logo.png'
import avatar from './img/avatar.png'
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Profile from "./components/Profile/Profile";

const App = () => {
  return(
    <div className="app-wrapper">
      <Header />
      <Sidebar />
      <Profile />
    </div>
  );
}

export default App;

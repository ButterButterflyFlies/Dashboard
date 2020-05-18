import React, { Component } from 'react';

// import logo from './logo.svg';
import './App.css';
import './Main.css';
import './icon/font/css/open-iconic.css'
import './Open-sans.css'

import SideNav from './component/pages/SideNav.jsx'
import Container from './Container.js'

import { Redirect } from "react-router-dom";

class App extends Component {
  render() {
    return (
        <div className="content">
          <SideNav/>
          <Container/>
          <Redirect to='/home' />
        </div>
    );
  }
}

export default App;

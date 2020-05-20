import React, { Component } from 'react';
import { Redirect } from "react-router-dom";

import SideNav from './component/pages/SideNav.jsx'
import Container from './Container.js'

// import logo from './logo.svg';
import './css/App.css'
import './css/Main.css'
import './css/Theme.css'

import './icon/font/css/open-iconic.css'
import './css/Open-sans.css'

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

import React, { Component } from 'react';
import { Redirect } from "react-router-dom";

import SideNav from './component/pages/SideNav.jsx'
import Container from './routes'

// import logo from './logo.svg';
import '@Style/App.css'
import '@Style/Main.css'
import '@Style/Theme.css'

import './icon/font/css/open-iconic.css'
import '@Style/Open-sans.css'

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

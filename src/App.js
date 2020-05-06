import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './Main.css';
import './icon/font/css/open-iconic.css'
import './Open-sans.css'

import SideNav from './component/pages/SideNav.jsx'
import Home from './component/pages/Home.jsx'
import Map from './component/pages/Map.jsx'

import {
  Switch,
  Route,
  Redirect
} from "react-router-dom";

class App extends Component {
  render() {
    return (
        <div className="content">
          <SideNav/>

          <Switch>
            <Route path='/home' exact component={Home} />
            <Route path='/map' exact component={Map} />
          </Switch>
          <Redirect to='/home' />
        </div>
    );
  }
}

export default App;

import React, { useEffect } from 'react';
import { Redirect } from "react-router-dom";
import { useSelector } from 'react-redux';

import SideNav from '@Component/pages/SideNav.jsx'
import Routes from './routes'

import 'bootstrap/dist/css/bootstrap.css'
import './icon/font/css/open-iconic.css'

import '@Style/Main.css'
import '@Style/Open-sans.css'
import '@Style/Themes/index.css'
import '@Style/Components/Pages/crtEffect.css'
// import 'bootstrap/dist/css/bootstrap.min.css'

const App = () => {
  const theme = useSelector(state => state.themeColorReducer.theme)
  
  useEffect(()=> {
    document.documentElement.setAttribute('data-theme', theme)
  })

  return ( 
    <div className="content">
      <SideNav />
      <Routes />
      {/* <Redirect to='/home' /> */}
    </div>
  )
}


export default App;

import { useEffect } from 'react';
import { Redirect } from "react-router-dom";
import { useSelector } from 'react-redux';

import SideNav from '@Component/pages/SideNav.jsx'
import Routes from './routes'

import './icon/font/css/open-iconic.css'

import '@Style/Main.css'
import '@Style/Open-sans.css'

import '@Style/themes/index.css'

const App = () => {
  const theme = useSelector(state => state.themeColorReducer.theme)
  useEffect(()=> {
    document.documentElement.setAttribute('data-theme', theme)
  })

  return ( 
    <div className="content">
      <SideNav />
      <Routes />
      <Redirect to='/home' />
    </div>
  )
}


export default App;

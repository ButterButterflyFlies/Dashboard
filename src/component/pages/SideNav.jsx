import React, { useState } from 'react';
import { Link } from "react-router-dom";
  

const SideNav = () => {
    const [current, setCurrent] = useState()
    return (
        <div className="sidenav info-block">
            <div className="sidenav-center-align menu">
                <Link to='/home'>
                    <i className="oi icon" data-glyph="list"></i>
                </Link>
            </div>
            
            <div className="sidenav-center-align category">
                <Link to='/home'>
                    <i className={`oi icon ${current === 'home' ? 'active': ''}`} data-glyph="pie-chart" onClick={() => {setCurrent('home')}}></i>                
                </Link>
                <Link to='/map'>
                    <i className={`oi icon ${current === 'map' ? 'active': ''}`} data-glyph="contrast" onClick={() => {setCurrent('map')}}></i>
                </Link>
                <Link to='/home'>
                    <i className={`oi icon ${current === 'home' ? 'active': ''}`} data-glyph="folder" onClick={() => {setCurrent('home')}}></i>
                </Link>
            </div>
        </div>
    )
}

export default SideNav
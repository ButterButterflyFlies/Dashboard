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
                    <i id="home" className={`oi icon ${current === 'home' ? 'active': ''}`} data-glyph="pie-chart" onClick={() => {setCurrent('home')}} />                
                </Link>
                <Link to='/map'>
                    <i id="map" className={`oi icon ${current === 'map' ? 'active': ''}`} data-glyph="map-marker" onClick={() => {setCurrent('map')}} />
                </Link>
                <Link to='/home'>
                    <i id="music" className={`oi icon ${current === 'home' ? 'active': ''}`} data-glyph="audio-spectrum" onClick={() => {setCurrent('home')}} />
                </Link>
                <Link to='/home'>
                    <i id="art" className={`oi icon ${current === 'home' ? 'active': ''}`} data-glyph="brush" onClick={() => {setCurrent('home')}} />
                </Link>
                <Link to='/home'>
                    <i id="weather" className={`oi icon ${current === 'home' ? 'active': ''}`} data-glyph="droplet" onClick={() => {setCurrent('home')}} />
                </Link>
                <Link to='/home'>
                    <i id="hobby" className={`oi icon ${current === 'home' ? 'active': ''}`} data-glyph="heart" onClick={() => {setCurrent('home')}} />
                </Link>
            </div>
        </div>
    )
}

export default SideNav
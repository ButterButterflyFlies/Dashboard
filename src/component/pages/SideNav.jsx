import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';

import {
  setThemeColor
} from '../../redux/action'


const SideNav = () => {
  const dispatch = useDispatch()
  const [current, setCurrent] = useState()

  const onclickEvent = (path, theme) => {
    setCurrent(path)
    dispatch(setThemeColor(theme))
  }

  return (
    <div className="sidenav info-block">
      <div className="sidenav-center-align menu">
        <Link to='/home'>
          <i className="oi icon" data-glyph="list" />
        </Link>
      </div>

      <div className="sidenav-center-align category">
        <Link to='/home'>
          <i
            id="home"
            className={`oi icon ${current === 'home' ? 'active' : ''}`}
            data-glyph="pie-chart"
            onClick={() => onclickEvent('home', 'Dark')}
          />
        </Link>
        <Link to='/map'>
          <i
            id="map"
            className={`oi icon ${current === 'map' ? 'active' : ''}`}
            data-glyph="map-marker"
            onClick={() => onclickEvent('map', 'Green')}
          />
        </Link>
        <Link to='/home'>
          <i
            id="music"
            className={`oi icon ${current === 'home' ? 'active' : ''}`}
            data-glyph="audio-spectrum"
            onClick={() => onclickEvent('home', 'Dark')}
          />
        </Link>
        <Link to='/home'>
          <i
            id="art"
            className={`oi icon ${current === 'home' ? 'active' : ''}`}
            data-glyph="brush"
            onClick={() => onclickEvent('home', 'Purple')}
          />
        </Link>
        <Link to='/home'>
          <i
            id="weather"
            className={`oi icon ${current === 'home' ? 'active' : ''}`}
            data-glyph="droplet"
            onClick={() => onclickEvent('home', 'Dark')}
          />
        </Link>
        <Link to='/home'>
          <i
            id="hobby"
            className={`oi icon ${current === 'home' ? 'active' : ''}`}
            data-glyph="heart"
            onClick={() => onclickEvent('home', 'Dark')}
          />
        </Link>
      </div>
    </div>
  )
}

export default SideNav
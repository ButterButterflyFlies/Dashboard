import React from 'react';
import { Link } from "react-router-dom";
  

const SideNav = () => (
    <div className="sidenav info-block">
        <div className="menu">
            <icon className="oi icon" data-glyph="list"></icon>
        </div>
        
        <div className="category">
            <Link to='/home'>
                <icon className="oi icon nav-icon" data-glyph="pie-chart"></icon>                
            </Link>
            <Link to='/map'>
                <icon className="oi icon nav-icon" data-glyph="contrast"></icon>
            </Link>
            <Link to='/home'>
                <icon className="oi icon nav-icon" data-glyph="folder"></icon>
            </Link>
        </div>
    </div>
)

export default SideNav
import React from 'react';
import { Link } from "react-router-dom";
  

const SideNav = () => (
    <div className="sidenav info-block">
        <div className="menu">
            <i className="oi icon" data-glyph="list"></i>
        </div>
        
        <div className="category">
            <Link to='/home'>
                <i className="oi icon nav-icon" data-glyph="pie-chart"></i>                
            </Link>
            <Link to='/map'>
                <i className="oi icon nav-icon" data-glyph="contrast"></i>
            </Link>
            <Link to='/home'>
                <i className="oi icon nav-icon" data-glyph="folder"></i>
            </Link>
        </div>
    </div>
)

export default SideNav
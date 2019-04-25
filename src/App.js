import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './Main.css';
import './icon/font/css/open-iconic.css'
import './Open-sans.css'
import Donut from './component/d3Charts/donut/donut.js'
import Chart from './component/d3Charts/chart/Chart.js'

class App extends Component {
  render() {
    return (
      // <body>
        <div className="content">
          <div className="sidenav info-block">
            <div className="menu">
              <icon className="oi icon" data-glyph="list"></icon>
            </div>
            
            <div className="category">
              <icon className="oi icon" data-glyph="pie-chart"></icon>                
              <icon className="oi icon" data-glyph="contrast"></icon>
              <icon className="oi icon" data-glyph="folder"></icon>
            </div>
            
          </div>
          <div className="main-content">
            <div className="navbar">
              <div className="page">
                <div className="head">
                  <h1>Overview</h1>
                </div>          
              </div>
            </div>
            <div className="container">
              <div className="piechart info-block">
                <div className ="title">
                  <h3>Device Status</h3>
                </div>
                <div className="charts">
                  <div className='arc-chart' color="FFFD87">
                    <Donut></Donut>
                  </div>
                    <div className='arc-chart' color="#AA525A" >
                    <Donut></Donut>
                  </div>
                </div>
              </div>
              <div className="weather info-block">
                <div className="title">
                  <h3>Sensor Stats</h3>
                </div>
                <div className="charts">
                  <div className="block">
                  <Chart></Chart>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      // </body>

    );
  }
}

export default App;

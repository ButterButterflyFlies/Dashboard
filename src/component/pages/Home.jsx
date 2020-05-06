import React, { Component } from 'react';
import Donut from '../d3Charts/donut/donut.js'
import Chart from '../d3Charts/chart/Chart.js'

const Title = (props) => (
    <div className="navbar">
        <div className="page">
            <div className="head">
                <h1>{props.title}</h1>
            </div>          
        </div>
    </div>
)

export default class Home extends Component {
  render() {
    return (
        <div className="main-content">
            <Title title = {'Overview'}/>
            <div className="container">
                <div className="piechart info-block">
                    <div className ="title">
                        <h2>Device Status</h2>
                    </div>
                    <div className="charts">
                        <div className='arc-chart' color="FFFD87">
                            <Donut/>
                        </div>
                        <div className='arc-chart' color="#AA525A" >
                            <Donut/>
                        </div>
                    </div>
                </div>
                <div className="weather info-block">
                    <div className="title">
                        <h2>Sensor Stats</h2>
                    </div>
                    <div className="charts">
                        <div className="block">
                            <Chart/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )};
}
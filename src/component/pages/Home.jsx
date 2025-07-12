import React, { Component } from 'react';
// import Donut from '../d3Charts/donut/donut.js'
// import Chart from '../d3Charts/chart/Chart.js'


import { connect } from "react-redux"

const Title = (props) => (
    <div className="navbar">
        <div className="page">
            <div className="head">
                <h1>{props.title}</h1>
            </div>          
        </div>
    </div>
)

class Home extends Component {
  render() {
    
    return (
        <div className="main-content">
            <Title title = {'Overview'}/>
            <div className="container">
                <div className="piechart info-block">
                    <div className ="title">
                        <h3>DEVICE STATUS</h3>
                    </div>
                    <div className="charts">
                        <div className='arc-chart' color="FFFD87">
                            {/* <Donut number={this.props.val1}/> */}
                        </div>
                        <div className='arc-chart' color="#AA525A" >
                            {/* <Donut number={this.props.val2}/> */}
                        </div>
                    </div>
                </div>
                <div className="weather info-block">
                    <div className="title">
                        <h3>SENSOR STATS</h3>
                    </div>
                    <div className="charts">
                        <div className="block">
                            {/* <Chart/> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )};
}

// export default Map
const mapStateToProps = (state) => {
    const {val1, val2} = state.pieChartValueReducer
    return {
        val1,
        val2
    }
}


export default connect(mapStateToProps)(Home)

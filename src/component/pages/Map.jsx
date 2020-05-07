import React, { Component } from 'react';

import { connect } from "react-redux";

import {
    setPieChartValue,
    getPieChartValue
} from '../../redux/action'

const Title = (props) => (
    <div className="navbar">
        <div className="page">
            <div className="head">
                <h1>{props.title}</h1>
            </div>          
        </div>
    </div>
)

class Map extends Component {
    render () {
        return (
            <div className="main-content">
                <Title title={'Maps'}/>
                <div className="container" style={{'flexDirection': 'column', 'justifyContent': 'space-evenly'}}>
                    <div style={{'flex': 'row'}}>
                        <input type='text'></input>
                        <button class="btn btn-large btn-default" style={{'marginLeft': '1rem'}}>Update row 1</button>
                    </div>
                    <div style={{'flex': 'row'}}>
                        <input type='text'></input>
                        <button class="btn btn-large btn-default" style={{'marginLeft': '1rem'}}>Update row 2</button>
                    </div>
                </div>
            </div>
        )
    }
};

const mapStateToProps = (state) => {
    console.log('state', state)
    return {
        state
    };
};


export default connect(
    mapStateToProps,
    {
        setPieChartValue,
        getPieChartValue
})(Map)

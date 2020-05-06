import React, { Component } from 'react';

const Title = (props) => (
    <div className="navbar">
        <div className="page">
            <div className="head">
                <h1>{props.title}</h1>
            </div>          
        </div>
    </div>
)

export default class Map extends Component {
    render () {
        return (
            <div className="main-content">
                <Title title={'Maps'}/>
                <div className="container"></div>
            </div>
        )
    }
};
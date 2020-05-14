import React, { Component } from 'react'

import { connect } from "react-redux"
import { setPieChartValue } from '../../redux/action'

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
    constructor(props) {
        super(props)
        this.state = {
            value: {}
        }
    }
    updateVal(name, e) {
        e.preventDefault()
        const {val1, val2} = this.props        
        const val = parseInt(e.target.value)

        const returnObject = {
            val1: (name === 'val1') ? val: val1,
            val2: (name === 'val2') ? val: val2
        }

        this.props.dispatch(setPieChartValue(returnObject))
        this.setState((prev, props)=> ({
            value: returnObject
        }))

    }
    sendUpdate(e) {
        e.preventDefault()
        this.props.dispatch(setPieChartValue(this.state.value))
    }

    componentWillUpdate(nextProps, nextState) {
        if (nextProps.defaultInputValue !== this.props.inputValue) {
            //Forcibly overwrite input value to new default if the default ever changes
            this.setState({value: nextProps.value});
        }
    }

    render () {
        const divStyle = {'flex': 'row'}
        return (
            <div className="main-content">
                <Title title={'Maps'}/>
                <div className="container" style={{'flexDirection': 'column', 'justifyContent': 'space-evenly'}}>
                    
                    <div style={divStyle}>
                        <input type='text'
                            value={this.props.val1}
                            onChange={e => this.updateVal('val1', e)}>
                        </input>
                        
                        <input type='text'
                            value={this.props.val2}
                            style={{'marginLeft': '1rem'}}
                            onChange={e => this.updateVal('val2', e)}>
                        </input>

                        {/* <button className="btn btn-large btn-default ml-3"
                            onClick={e => this.sendUpdate(e)}
                            style={{'marginLeft': '1rem'}}>
                                Update row 1
                        </button> */}
                    </div>

                    <div style={divStyle}>
                        
                    </div>
                </div>
            </div>
        )
    }
}

// export default Map
const mapStateToProps = (state) => {
    const {val1, val2} = state.pieChartValueReducer
    return {
        val1,
        val2
    }
}


export default connect(mapStateToProps)(Map)

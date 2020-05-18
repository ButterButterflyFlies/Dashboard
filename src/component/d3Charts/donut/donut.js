import React, { Component } from 'react'
import * as d3 from 'd3'
import ResponsiveWrapper from '../responsive/response.js'
const TAU = 2* Math.PI

function newArc (radius, val) {
    return d3.arc()
        .innerRadius(radius)
        .outerRadius(radius+2)
        .startAngle(0)
        .endAngle(val/100 * TAU)
}

// function arcTween(oldAngle, newAngle, arc) {
//     return function(d) {
        
//         console.log(d)
//         var interpolate = d3.interpolate(oldAngle, newAngle);
//         return function(t) {
//             d.endAngle = interpolate(t);
//             return arc(d);
//         };
//     };
// }


const Text = ({fontSize, text}) => {
    const text_props = {
        fill: "#565663",
        textAnchor: "middle",
        style: { "fontSize": `${fontSize}px` },
        dy: fontSize/3,
        dx: 2
    }
    return  <text {...text_props}>{text}</text>
}

const ForeGround = ({radius, val}) => {
    var bar_arc = newArc (radius, val)

    // foreground setup
    const bar_props = {
        fill:"#4CBAFF",
        d: bar_arc()
    }

    return <path {...bar_props} ></path>
}

const BackGround = ({radius}) => {
    var bg_arc = d3.arc()
            .innerRadius(radius)
            .outerRadius(radius+2)
            .startAngle(0)
            .endAngle(TAU)

    const bg_props = {
        style: { "fill":"#565663" },
        d: bg_arc()
    }
    return <path {...bg_props}></path>
}

const DonutG = (props) => {
    const {svgDimensions} = props
    const g_attr = {
        transform: `translate( ${svgDimensions.width/2}, ${svgDimensions.height/2})`
    }
    return <g {...g_attr}> {props.children} </g>
}

class Donut extends Component {
    render(){
        const svgDimensions = {
            width: this.props.parentWidth,
            height: 150
        }

        var val = this.props.number,
            text = `${val} %`

        const min = Math.min(...Object.values(svgDimensions)),
              fontSize = min/6,
              radius = min/3

        return (
            <svg {...svgDimensions}>
                <DonutG svgDimensions={svgDimensions}>
                    <BackGround radius={radius} />
                    <ForeGround radius={radius} val={val} />
                    <Text fontSize={fontSize} text={text} />
                </DonutG>
            </svg>
        )
    }
}

export default ResponsiveWrapper(Donut)
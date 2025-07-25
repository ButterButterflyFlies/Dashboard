import { Component } from 'react'
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


const Text = ({length, val}) => {
    const fontSize = length / 6
    const text_props = {
        fill: "#565663",
        textAnchor: "middle",
        style: { "fontSize": `${fontSize}px` },
        dy: fontSize/3,
        dx: 2
    }
    return  <text {...text_props}>{`${val} %`}</text>
}

const ForeGround = ({length, val}) => {
    const radius = length/3
    var bar_arc = newArc (radius, val)

    // foreground setup
    const bar_props = {
        fill:"#4CBAFF",
        d: bar_arc()
    }

    return <path {...bar_props} ></path>
}

const BackGround = ({length}) => {
    const radius = length/3
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
    render() {
        const val = this.props.number
        const svgDimensions = {
            width: this.props.parentWidth,
            height: 150
        }

        const length = Math.min(...Object.values(svgDimensions))

        return (
            <svg {...svgDimensions}>
                <DonutG svgDimensions={svgDimensions}>
                    <BackGround length={length} />
                    <ForeGround length={length} val={val} />
                    <Text length={length} val={val} />
                </DonutG>
            </svg>
        )
    }
}

export default ResponsiveWrapper(Donut)
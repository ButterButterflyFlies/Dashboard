import React from 'react'
import { useSpring, animated } from 'react-spring'

// const Title = (props) => (
//     <div className="navbar">
//         <div className="page">
//             <div className="head">
//                 <h1>{props.title}</h1>
//             </div>          
//         </div>
//     </div>
// )

const MusicProjection = () => {
    const [props, set] = useSpring(() => ({
        xy: [0, 0],
        config: {
            mass: 10,
            tension: 550,
            friction: 140
        }}
    ))
    const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2]
    const trans = (x, y) => `translate3d(${-(x / 120)}px,${-(y / 120)}px,0)`

    return (
        <div
            className="main-content"
            style={{overflowY: "hidden"}}
            onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}
        >
            <animated.div
                className="container"
                style={{
                    'flexDirection': 'row',
                    'justifyContent': 'space-evenly',
                    transform: props.xy.interpolate(trans)
                }}
            >
                <div style={{backgroundColor:'rgb(33, 33, 35)', opacity:'0.4'}} className="crt-background info-graph music-card">
                    <div className="music-option-list">
                        <button className="music-button">werwerwe</button>
                    </div>
                    
                </div>
                <div style={{opacity:'0.7'}} className="crt-background info-graph music-card">
                    <div className="music-player-album">
                        <img
                            src="https://shop.r10s.jp/r-ys-onlineshop/cabinet/compass1584160988.jpg"
                            alt=""
                            width="100%"
                        />
                    </div>
                    <div className="music-player-title">
                        <p className="title-main">Humor</p>
                        <p className="title-sub">Ceremony</p>
                    </div>
                    <div className="music-player-control">
                        <div className="music-control-container">
                            <div className="music-prev">
                                <i className="oi icon" data-glyph="media-skip-backward"/>
                            </div>

                            <div className="music-play">
                                <i className="oi icon" data-glyph="media-play"/>
                            </div>
                            
                            <div className="music-next">
                                <i className="oi icon" data-glyph="media-skip-forward"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{backgroundColor:'rgb(33, 33, 35)', opacity:'0.7'}} className="crt-background info-graph music-card">
                    <div className="music-title">

                    </div>
                    <div className="music-list">
                        
                    </div>
                </div>
            </animated.div>
        </div>
    )
}

const MusicBlock = () => (
    <div className="main-content">
        <div className="container" style={{'flexDirection': 'row', 'justifyContent': 'space-evenly'}}>
            <div className="info-graph music-card self-neumorphism"></div>
            <div className="info-graph music-card self-neumorphism">
                <div className="music-player-album" />
                <div className="music-player-title" />
                <div className="music-player-control">
                    <div className="music-control-container">
                        <div className="music-prev">
                            <div className="prev-button self-neumorphism"/>
                        </div>

                        <div className="music-play">
                            <div className="play-button self-neumorphism"/>
                        </div>
                        
                        <div className="music-next">
                            <div className="next-button self-neumorphism"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="info-graph music-card self-neumorphism"></div>
        </div>
    </div>
)

const Music = () => (
    <div className="main-content">
        <MusicBlock />
        <div class="main-content" style={{ position:'absolute' }}>
            <MusicProjection />
        </div>
    </div>
)

export default Music

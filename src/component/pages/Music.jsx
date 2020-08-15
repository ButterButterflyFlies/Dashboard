import React from 'react'
import ReactPlayer from 'react-player/youtube'
import { useSpring, animated } from 'react-spring'

const trackList = [
    'どろん',
    'Teenager Forever',
    'ユーモア',
    '白日',
    '飛行艇',
    '小さな惑星',
    'Overflow',
    '傘',
    '壇上',
]

const demoLyrics = [
    '時には誰かを',
    '知らず知らずのうちに',
    '傷つけてしまったり',
    '失ったりして初めて',
    '犯した罪を知る',
    '',
    '戻れないよ、昔のようには',
    '煌めいて見えたとしても',
    '明日へと歩き出さなきゃ',
    '雪が降り頻ろうとも',
    '',
    '今の僕には',
    '何ができるの？',
    '何になれるの？',
    '誰かのために生きるなら',
    '正しいことばかり',
    '言ってらんないよな',
    '',
    'どこかの街で',
    'また出逢えたら',
    '僕の名前を',
    '覚えていますか？',
    'その頃にはきっと',
    '春風が吹くだろう',
    '',
    '真っ新に生まれ変わって',
    '人生一から始めようが',
    'へばりついて離れない',
    '地続きの今を歩いているんだ　',
    '',
    '真っ白に全てさよなら',
    '降りしきる雪よ',
    '全てを包み込んでくれ',
    '今日だけは',
    '全てを隠してくれ',
    '',
    'もう戻れないよ、昔のようには',
    '羨んでしまったとしても',
    '明日へと歩き出さなきゃ',
    '雪が降り頻ろうとも',
    '',
    'いつものように笑ってたんだ',
    '分かり合えると思ってたんだ',
    '曖昧なサインを見落として',
    '途方のない間違い探し',
    '',
    '季節を越えて',
    'また出逢えたら',
    '君の名前を',
    '呼んでもいいかな',
    'その頃にはきっと',
    '春風が吹くだろう　',
    '',
    '真っ新に生まれ変わって',
    '人生一から始めようが',
    '首の皮一枚繋がった',
    '如何しようも無い今を',
    '生きていくんだ',
    '',
    '真っ白に全てさよなら',
    '降りしきる雪よ',
    '今だけはこの心を凍らせてくれ',
    '全てを忘れさせてくれよ',
    '',
    '朝目覚めたら',
    'どっかの誰かに',
    'なってやしないかな',
    'なれやしないよな',
    '聞き流してくれ',
    '',
    '忙しない日常の中で',
    '歳だけを重ねた',
    'その向こう側に',
    '待ち受けるのは',
    '天国か地獄か',
    '',
    'いつだって人は鈍感だもの',
    'わかりゃしないんだ肚の中',
    'それでも愛し愛され',
    '生きて行くのが定めと知って',
    '',
    '後悔ばかりの人生だ',
    '取り返しのつかない過ちの',
    '一つや二つくらい',
    '誰にでもあるよな',
    'そんなんもんだろう',
    'うんざりするよ',
    '',
    '真っ新に生まれ変わって',
    '人生一から始めようが',
    'へばりついて離れない',
    '地続きの今を歩いて行くんだ',
    '',
    '真っ白に全てさようなら',
    '降りしきる雪よ',
    '全てを包み込んでくれ',
    '今日だけは',
    '全てを隠してくれ',
]
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
    const opts = {
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
            disablekb: 1,
            loop:1,
            modestbranding: 1,
            iv_load_policy:3,
            controls: 0,
        },
    };
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
                <div style={{opacity:'0.5'}} className="crt-background info-graph music-card">
                    <div className="music-option-list" style={{width:'100%', height:'100%', overflow:'hidden'}}>
                        <img src="https://j.gifs.com/3Q3pMp.gif" style={{height:'100%', marginLeft:'-128%', opacity:'0.7'}}/>
                        {/* <ReactPlayer
                            muted={true}
                            playing={true}
                            height="100%"
                            // style={{right:'50%'}}
                            url='https://www.youtube.com/watch?v=UFQEttrn6CQ'
                        /> */}
                    </div>
                    <div className="music-option-list" style={{width:'inherit', height:'100%', position:'absolute', top: '0' }}>
                        <p style={{marginTop:'110%', textAlign: 'center', fontSize:'1.7rem', fontWeight: 'boler', letterSpacing: '2px'}}>KING GNU</p>
                        <div className="mx-3" style={{paddingLeft:'1rem',paddingRight: '1rem', backgroundImage: 'linear-gradient(transparent 0%, black 60%)', height:'28%'}}>
                            <p style={{marginTop:'1.2rem', textAlign: 'center', fontSize:'rem', letterSpacing: '1px', fontSize:'0.7rem'}}>
                                時には誰かを
                            </p>
                            <p style={{marginTop:'.5rem', textAlign: 'center', fontSize:'rem', letterSpacing: '1px', fontSize:'0.7rem'}}>
                                知らず知らずのうち
                            </p>
                            <p style={{marginTop:'.5rem', textAlign: 'center', fontSize:'rem', letterSpacing: '1px', fontSize:'0.7rem'}}>
                                傷つけてしまったり
                            </p>
                            <p style={{marginTop:'.5rem', textAlign: 'center', fontSize:'rem', letterSpacing: '1px', fontSize:'0.7rem'}}>
                                失ったりして初めて
                            </p>
                            <p style={{marginTop:'.5rem', textAlign: 'center', fontSize:'rem', letterSpacing: '1px', fontSize:'0.7rem'}}>
                                犯した罪を知る
                            </p>
                        </div>

                        {/* <ReactPlayer
                            muted={true}
                            playing={true}
                            height="100%"
                            // style={{right:'50%'}}
                            url='https://www.youtube.com/watch?v=UFQEttrn6CQ'
                        /> */}
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
                        <p className="title-main">HAKU JITSU</p>
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

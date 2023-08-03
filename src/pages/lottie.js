
import * as React from "react"
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import "./style.css"
import {useRef, useState} from "react"
import lot from "../images/complex.json"
import {Link} from 'gatsby'


function gain( x, k ) 
{
    let a = 0.5*Math.pow(2.0*((x<0.5)?x:1.0-x), k);
    return (x<0.5)?a:1.0-a;
}

const Lottie = () => {
    const [offset, setOffset] = React.useState(0);
    const playerRef = useRef(null);

    const handleScroll = (scroll) => {
        setOffset(scroll);
        console.log("test");
        playerRef.current.setSeeker((scroll/16) % 28, false);
    };

    React.useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return <React.Fragment>
        <Link to="/">Return Home</Link>
        <div id="scroll" style={{overflowY:"scroll", height:"100vh"}} onScroll={(e) => handleScroll(document.getElementById("scroll").scrollTop)}>
        <Player
                // autoplay 
                // loop
                src={lot}
                style={{ height: '100vh', width: '100vw', pointerEvents:"none", position:"fixed", top:"2px", left:"0px" }}
                ref={playerRef}
                >
                <Controls visible={false} buttons={['play', 'repeat', 'debug']} />
                <h1>SCROLL DOWN</h1>
            </Player>
            
        <div style={{width:"10px", height:"200vh"}}></div>
    </div>
        
        
        
    </React.Fragment>
}

export default Lottie

export const Head = () => <title>Home Page</title>

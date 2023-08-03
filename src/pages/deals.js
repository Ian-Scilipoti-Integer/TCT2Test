import * as React from "react"
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import "./style.css"
import {useRef, useState} from "react"
import deal0 from "/src/images/deal0.png"
import deal1 from "/src/images/deal1.png"
import bg from "/src/images/blueEmbrace.png"
import {Link} from 'gatsby'
// import { useState } from "react/cjs/react.production.min";


function gain( x, k ) 
{
    let a = 0.5*Math.pow(2.0*((x<0.5)?x:1.0-x), k);
    return (x<0.5)?a:1.0-a;
}

const Deals = () => {

    const [offset, setOffset] = React.useState(0);
    const [offset2, setOffset2] = React.useState(0);
    const [offset3, setOffset3] = React.useState(0);
    let width = 300;

    // const handleScroll = () => {
    //     setOffset(window.scrollX + window.innerWidth / 2 - width/2);
    // };

    // React.useEffect(() => {
    //     window.addEventListener('scroll', handleScroll, { passive: true });

    //     return () => {
    //         window.removeEventListener('scroll', handleScroll);
    //     };
    // }, []);

    const getContent = (off) => {
        let content = [];
        for (let i = 0; i < 10; i ++) {
            const left = i * width;

            let value = (1 - Math.min(1, Math.abs(left - off) / 500.0));

            value = gain(value, 2.5);
            const opacity = Math.min(0.99, value * 1.5 + 0.5); 
            const widthScaler = value * 0.1 + 0.9;
            if ((i & 1) == 0) {
                content.push(
                    <div key={i} className="tileContainer">
                        <img  width={width * widthScaler} style={{opacity:opacity}} src={deal0}></img>
                    </div>
                );
            }
            else {
                content.push(
                    <div key={i} className="tileContainer">
                        <img width={width * widthScaler} style={{opacity:opacity}} src={deal1}></img>
                    </div>
                );
            }  
        }
        return content;
    };

    

  return <React.Fragment>
        <Link to="/">Return Home</Link>
        <img className="blueBG" src={bg}></img>
        <div id="c1" className="dealList" onScroll={(e) => setOffset(document.getElementById("c1").scrollLeft + window.innerWidth / 2 - width/2)}>
            {getContent(offset)};
        </div>

        <div id="c2" className="dealList" onScroll={(e) => setOffset2(document.getElementById("c2").scrollLeft + window.innerWidth / 2 - width/2)}>
            {getContent(offset2)};
        </div>

        <div id="c3" className="dealList" onScroll={(e) => setOffset3(document.getElementById("c3").scrollLeft + window.innerWidth / 2 - width/2)}>
            {getContent(offset3)};
        </div>
  </React.Fragment>
}

export default Deals

export const Head = () => <title>Home Page</title>

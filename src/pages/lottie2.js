import * as React from "react"
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import "./style.css"
import {useRef, useState} from "react"
import lot from "../images/shake.json"
import lot1 from "../images/open.json"
import {Link} from 'gatsby'
// import { useState } from "react/cjs/react.production.min";

const Lottie2 = () => {
  const playerRef = useRef(null);
  const [num, setNum] = useState(0);

  const updateQuestion = () => {
    playerRef.current.setSeeker(0, true);
    playerRef.current.play(); 
    setNum(num + 1);
  }

  return <div>
    <Link to="/">Return Home</Link>
    {num < 3 ? 
      <Player
        // autoplay
        // loop
        src={lot}
        style={{ height: '300px', width: '300px' }}
        ref={playerRef}
      >
        <Controls visible={false} buttons={['play', 'repeat', 'debug']} />
      </Player>
      :
      <Player
        autoplay
        // loop
        // src="https://lottie.host/1fe8978f-819e-4d54-b7d2-ade5a3b7ba44/kB1LasdA6F.json"
        // src="https://lottie.host/420dc669-c37e-4e57-83d6-26d7552195bf/mpaifla2q9.json"
        src={lot1}
        style={{ height: '400px', width: '400px' }}
        ref={playerRef}
      >
        <Controls visible={false} buttons={['play', 'repeat', 'debug']} />
      </Player>
    }

    {num < 3 ? <div style={{
      display:"flex",
      flexDirection:"column",
      alignItems:"center",

    }}>
      <p style={{fontSize:"250%", fontFamily: "AleckBlack"}}>
        {num==0 ? "How do you feel about fashion?" : ""}
        {num==1 ? "How do you feel about technology?" : ""}
        {num==2 ? "How do you feel about lifestyle?" : ""}
      </p>
      <button onClick={updateQuestion} className="quizButton">Love it!</button>
      <button onClick={updateQuestion} className="quizButton">Don't care!</button>
      <button onClick={updateQuestion} className="quizButton">I'm neutral.</button>

    </div> : ""}
  </div>
}

export default Lottie2

export const Head = () => <title>Home Page</title>

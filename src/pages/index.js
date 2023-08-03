import * as React from "react"
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import "./style.css"
import {useRef, useState} from "react"
import lot from "../images/testAnim.json"
import {Link} from 'gatsby'
// import { useState } from "react/cjs/react.production.min";

const IndexPage = () => {


  return <div style={{display:"flex", flexDirection:"column", alignItems:"center", width:"100vw", height:"100vh"}}>
      <Link to="/lottie">lottie test 1: scrolling</Link>
      <Link to="/lottie2">lottie test 2: quiz</Link>
      <Link to="/deals">scrolling and CSS test</Link>

      <Player
          autoplay 
          loop
          src={lot}
          style={{ height: '60%' }}
          >
          <Controls visible={false} buttons={['play', 'repeat', 'debug']} />
      </Player>
  </div>
}

export default IndexPage

export const Head = () => <title>Home Page</title>

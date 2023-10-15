import "./HeroImgStyle.css";
import React from 'react';
import IntroImg from "../Images/intro-bg.jpg"
import {Link} from "react-router-dom";

const HeroImg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="intro-img" src={IntroImg} alt="Intro-pic" />
      </div>
      <div className="content">
        <p>Hello, I'm </p>
        <h1>RAVI VERMA</h1>
        {/* <p>FRONT-END DEVELOPER</p> */}
        <p>Welcome to my portfolio !</p>
        <div className="buttons">
            <Link to = "https://drive.google.com/file/d/1qHVJhMwUeeXJmMb1AsEnyjiS7h5duZem/view?usp=sharing" target="_blank" className="btn">RESUME ></Link>
            <Link to = "/contact" className="btn btn-light">LET'S TALK</Link>
        </div>
      </div>
    </div>
  )
}

export default HeroImg

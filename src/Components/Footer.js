import React from 'react';
import "./FooterStyle.css";
import {FaHome, FaInstagram, FaLinkedin, FaMailBulk, FaPhone, FaTwitter,FaGithub} from "react-icons/fa";
import {SiLeetcode,SiGeeksforgeeks,SiCodingninjas} from "react-icons/si";
import {Link} from "react-router-dom";

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-container">
        <div className="left">
          <div className="location">
            h<FaHome size = {20} style={{color:"white", 
            marginRight:"2rem"}}/>
            <div>
              <p>Satbharia, Maharajganj,</p>
              <p>Uttar Pradesh, India.</p>
            </div>
          </div>
          <div className="phone">
          <h4><FaPhone size = {20} style={{color:"white", 
            marginRight:"2rem"}}/> +91 9161621334</h4>
          </div>
          <div className="email">
          <h4><FaMailBulk size = {20} style={{color:"white", 
            marginRight:"2rem"}}/> vravi084@gmail.com</h4>
          </div>
        </div>
        <div className="right">
          <div>
            {/* <h4>About Me</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet laudantium consequuntur molestiae iusto quod nihil at mod</p> */}
            <h4>Coding Profiles</h4>
            <p>I have solved more than 1500 problems across different platforms which shows my knowledge in DSA and my ability in problem solving.</p>
          </div>
          <div className="coding-profile">
          <Link to={"https://leetcode.com/ravi_verma786/"} target='_blank'>
          <div className="codingiconbox">
            <SiLeetcode size = {30} style={{color:"white", 
            marginRight:"1rem"}}/>
            </div>
            </Link>

            <Link to={"https://auth.geeksforgeeks.org/user/vravi084"} target='_blank'>
            <div className="codingiconbox">
            <SiGeeksforgeeks size = {30} style={{color:"white", 
            marginRight:"1rem"}}/>
            </div>
            </Link>

            <Link to={"https://www.codingninjas.com/studio/profile/a90b18a6-2bd7-49b5-91b9-11ef9a449ace"} target='_blank'>
            <div className="codingiconbox">
            <SiCodingninjas size = {30} style={{color:"white", 
            marginRight:"1rem"}}/>
            </div>
            </Link>
          </div>
        </div>
      </div>

      <div className="social-media">
          <div className="iconbox">
          <Link to={"https://www.instagram.com/raviverma2871/"} target='_blank'>
          <FaInstagram size = {30} style={{color:"white", 
            marginRight:"1rem"}}/>
          </Link>
          </div>
          <div className="iconbox">
          <Link to={"https://twitter.com/_Ravi__Verma"} target='_blank'>
            <FaTwitter size = {30} style={{color:"white", 
            marginRight:"1rem"}}/>
            </Link>
          </div>
          <div className="iconbox">
          <Link to={"https://www.linkedin.com/in/ravi-verma-708926164/"} target='_blank'>
            <FaLinkedin size = {30} style={{color:"white", 
            marginRight:"1rem"}}/>
          </Link>
          </div>
          <div className="iconbox">
          <Link to={"https://github.com/raviVerma786"} target='_blank'>
            <FaGithub size = {30} style={{color:"white", 
            marginRight:"1rem"}}/>
            </Link>
          </div>
        </div>
       <p style={{textAlign:"center"}}>&copy; All rights reserved</p>
    </div>
  )
}

export default Footer;

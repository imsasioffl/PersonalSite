/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './footer.css'
import { FaFacebook } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { IoLogoTwitter } from "react-icons/io";

const Footer = () => {
  return (
    <footer>
      <a href="#
      " className='footer_logo'>SK</a>
      <ul className='permalinks'>
        {/* <li><a href="#">Home</a></li> */}
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer-socials">
        <a href="http://fb.com"><FaFacebook/></a>
        <a href="http://instagram.com"><FiInstagram/></a>
        <a href="http://twitter.com"><IoLogoTwitter/></a>
      </div>

      <div className="footer-copyrights">
        <small>&copy; SASIKUMAR.S</small>
      </div>
    </footer>
  )
}

export default Footer
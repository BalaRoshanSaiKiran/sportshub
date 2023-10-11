import React from 'react'
import "./CSS/Footer.css"
const Footer = () => {
  return (
    <div id="Footer-div">
        <div>
            <h1>Footer</h1>
        </div>
        <div>
            <p>#Company</p>
            <p>Sri Vasavi</p>
        </div>
        <div>
            <h2>Follow us</h2>
        </div>
        <div id="follow-icons">
            <button id="icons-button"><a href="https://www.instagram.com/sves_official_info/">IG</a></button><button id="icons-button"><a href="https://www.facebook.com/">FB</a></button><button id="icons-button"><a href="https://twitter.com/?lang=en-in/">TW</a></button>
        </div>
    </div>
  )
}

export default Footer
import React from 'react'
import InstaLogo from "../../assets/images/instagram-logo.png"
import FacebookLogo from "../../assets/images/facebook-logo.png"
import GitLogo from "../../assets/images/github-logo.png"

function Footer() {
  return (
    <ul>
        <li>
            <a href="https://www.facebook.com/tanguy.strub/" target="_blank">
                <img className="logo-style" src={FacebookLogo}></img>
            </a>
        </li>
        <li>
            <a href="https://www.instagram.com/tangzzz_mibu/?hl=en" target="_blank">
                <img className="logo-style" src={InstaLogo}></img>
            </a>
        </li>
        <li>
            <a href="https://github.com/Tanguy1213" target="_blank">
                <img className="logo-style" src={GitLogo}></img>
            </a>
        </li>
    </ul>
  )
}

export default Footer;
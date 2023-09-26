import React from "react";
import InstaLogo from "../../assets/images/instagram-logo.png";
import FacebookLogo from "../../assets/images/facebook-logo.png";
import GitLogo from "../../assets/images/github-logo.png";
import "./Footer.scss";
import ThemSong from "../../assets/audio/stay-song.mp3";

function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <ul>
          <li>
            <a className="social-link"
              href="https://www.facebook.com/tanguy.strub/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="logo-style"
                src={FacebookLogo}
                alt="logo de facebook"
              ></img>
            </a>
          </li>
          <li>
            <a className="social-link"
              href="https://www.instagram.com/tangzzz_mibu/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="logo-style"
                src={InstaLogo}
                alt="logo d instagram"
              ></img>
            </a>
          </li>
          <li>
            <a className="social-link"
              href="https://github.com/Tanguy1213"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="logo-style"
                src={GitLogo}
                alt="logo de github"
              ></img>
            </a>
          </li>
        </ul>
        <span>Suivez mon activité</span>
      </div>
        <audio controls>
          <source src={ThemSong} type="audio/mpeg" />
          Votre navigateur ne prend pas en charge l'élément audio.
        </audio>
        
    </footer>
  );
}

export default Footer;

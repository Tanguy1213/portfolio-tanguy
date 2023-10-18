import React from "react";
import "./Footer.scss";
import ThemSong from "../../assets/audio/A-friend-of-mine.mp3";

function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <ul>
          <li>
            <a
              className="social-link"
              href="https://www.linkedin.com/in/tanguy-strub-b3a954239/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Lien vers Linkedin"
            >
              <i className="fa-brands fa-linkedin logo-style"></i>
            </a>
          </li>
          <li>
            <a
              className="social-link"
              href="https://github.com/Tanguy1213"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Lien vers github"
            >
              <i className="fa-brands fa-square-github logo-style"></i>
            </a>
          </li>
          <li>
            <a
              className="social-link"
              href="https://www.instagram.com/tangzzz_mibu/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Lien vers instagram"
            >
              <i className="fa-brands fa-square-instagram logo-style"></i>
            </a>
          </li>
        </ul>
        <span>Suivez mon activité</span>
      </div>
      <audio controls>
        <source src={ThemSong} type="audio/mpeg" />
        {/* Musique utilisée avec l'autorisation de Osuri - Carlos Millet */}
        Votre navigateur ne prend pas en charge l'élément audio.
      </audio>
    </footer>
  );
}

export default Footer;

import React, { useEffect, useState } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import "./Header.scss";
import signature1 from "../../assets/images/Signature-tanguy-large.webp";
import signature2 from "../../assets/images/Signature-tanguy-small.webp";

function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const [scrolling, setScrolling] = useState(false);

  const handleHomeClick = () => {
    if (location.pathname === "/") {
      // Si l'URL actuelle est celle de la page d'accueil, recharge la page
      window.location.reload();
    } else {
      // Si l'URL actuelle n'est pas celle de la page d'accueil, redirige vers la page d'accueil
      navigate("/");
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        // Vous pouvez ajuster la valeur à partir de laquelle la barre se réduit
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  //GEstion de défilement vers une ancre qui n'est pas dans le meme composant

  const scrollToAnchor = (anchorId) => {
    const target = document.querySelector(anchorId);
    if (target) {
      const offset = target.offsetTop - 50;//-50 car c'est la taille du header qui est en pos fixe
      window.scrollTo({
        top: offset,
        behavior: 'smooth',
      });
    }
  };
  

  return (
    <header>
      <div className="header-container">
        <nav
          className={
            scrolling ? "scrolled navigation-container" : "navigation-container"
          }
        >
          <NavLink
            to="/"
            onClick={handleHomeClick}
            className="titre-de-la-page"
          >
            <h1 >
              <img
                className={scrolling ? "signature2-style" : "signature1-style"}
                src={scrolling ? signature2 : signature1}
                alt="signature design tanguy strub"
              ></img>
            </h1>
          </NavLink>
          <ul className="list-nav-link">
            <li>
              <img
                className={"signature-mobile"}
                src={signature2}
                alt="signature design tanguy strub"
              ></img>
            </li>
            <li>
              <NavLink to="/" onClick={handleHomeClick}>
                <h2 className="nav-link">Accueil</h2>
              </NavLink>
            </li>
            <li>
              <NavLink onClick={() => scrollToAnchor('#projets-anchor')}>
                <h2 className="nav-link">Projets</h2>
              </NavLink>
            </li>
            <li>
              <NavLink onClick={() => scrollToAnchor('#competence-anchor')}>
                <h2 className="nav-link">Compétences</h2>
              </NavLink>
            </li>
            <li>
              <NavLink to="/Contact">
                <h2 className="nav-link">Contact</h2>
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;

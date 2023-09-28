import React, { useEffect, useState } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import "./Header.scss";
import signature1 from "../../assets/images/Signature-tanguy-large.png";
import signature2 from "../../assets/images/Signature-tanguy-small.png";

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

  return (
    <header>
      <nav className={scrolling ? "scrolled" : ""}>
        <NavLink to="/" onClick={handleHomeClick}>
          <h1>
            <img
              className={scrolling ? "signature2-style" : "signature1-style"}
              src={scrolling ? signature2 : signature1}
              alt="signature design tanguy strub"
            ></img>
          </h1>
        </NavLink>
        <ul>
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
            <NavLink>
              <h2 className="nav-link">Compétences</h2>
            </NavLink>
          </li>
          <li>
            <NavLink>
              <h2 className="nav-link">Projets</h2>
            </NavLink>
          </li>
          <li>
            <NavLink to="/Contact">
              <h2 className="nav-link">Contact</h2>
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

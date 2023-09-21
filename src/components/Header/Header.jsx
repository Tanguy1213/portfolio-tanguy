import React from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import "./Header.scss";


function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleHomeClick = () => {
    if (location.pathname === "/") {
      // Si l'URL actuelle est celle de la page d'accueil, recharge la page
      window.location.reload();
    } else {
      // Si l'URL actuelle n'est pas celle de la page d'accueil, redirige vers la page d'accueil
      navigate("/");
    }
  };

  return (
    <header>
      <nav>
        <NavLink to="/" onClick={handleHomeClick}>
          <h1>Tanguy Strub</h1>
        </NavLink>
        <ul>
          <li><NavLink to="/" onClick={handleHomeClick}><h2>Acceuil</h2></NavLink></li>
          <li><NavLink><h2>Skills</h2></NavLink></li>
          <li><NavLink><h2>Projets</h2></NavLink></li>
          <li><NavLink><h2>Contact</h2></NavLink></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
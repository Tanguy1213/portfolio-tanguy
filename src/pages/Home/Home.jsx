import React, { useState, useEffect } from "react";
import "./Home.scss";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import ProfilePicture2 from "../../assets/images/Profile-picture-reel.png";
import BtnDownload from "../../components/BtnDownload/BtnDownload";
import Particles from "../../components/Particles";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Loader from "../../components/Loader/Loader";
import CompBar from "../../components/CompBar/CompBar";

function Home() { 
  window.onload = function () {
    setTimeout(function () {
      window.scrollTo(0, 0);
    }, 0);
  };
  //Gestion de l'animation de la photo de profil ---A retirer ?---
  const [isFlipped, setIsFlipped] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isClickable, setIsClickable] = useState(true);
  const handleProfilePictureClick = () => {
    if (!isAnimating && isClickable) {
      setIsAnimating(true);
      setIsFlipped(!isFlipped);
    }
  };
  useEffect(() => {
    //Observation de si l'élément est en animation, si oui il n'est plus cliquable et inversement
    if (isAnimating) {
      setTimeout(() => {
        setIsAnimating(false);
        setIsClickable(true); // Réactivez la possibilité de cliquer après l'animation
      }, 1000);
      setIsClickable(false); // Désactivez la possibilité de cliquer pendant l'animation
    }
  }, [isAnimating]);
  const profilePictureClasses = `profile-picture-style${
    //Changement de classe en fonction de si l'image est flipped ou non, activant l'animation CSS de flipX
    isFlipped ? " flipped" : ""
  }`;

  //Gestion de l'animation de l'icone de retour en haut de page
  const [iconeIsHovered, seticoneIsHovered] = useState(false);
  const handleMouseEnter = () => {
    seticoneIsHovered(true);
  };
  const handleMouseLeave = () => {
    seticoneIsHovered(false);
  };
  const faGoingUpIcone = iconeIsHovered // En fonction du state de Hover on applique (ou non) la classe FontAwesome de bounce
    ? "fa-solid fa-angles-up fa-xl fa-bounce"
    : "fa-solid fa-angles-up fa-xl";

  //Paramètres du TypeText
  const [typedText] = useTypewriter({
    words: [" Front-end", " JavaScript", " React"],
    loop: {},
  });

  //délais pour l'affichage des barres de compétences pour éviter un micro affichage et le déclenchement du remplissage non voulu
  useEffect(() => {
    const competencesContainer = document.querySelector(
      ".competence-section"
    );

    // Utilisez setTimeout pour ajouter la classe "visible" après 2,5 secondes (2500 millisecondes)
    setTimeout(() => {
      if (competencesContainer) {
        competencesContainer.classList.add("visible");
      }
    }, 1000); // 1 secondes de délais
  }, []);

  //Gestion de l'apparition et disparition de la barre défilement
  useEffect(() => {
    // Désactivez la barre de défilement en ajoutant la classe "loading" au body
    document.body.classList.add('loading');

    // Attendez 2,5 secondes, puis réactivez la barre de défilement en remplaçant la classe "loading" par "loaded"
    setTimeout(() => {
      document.body.classList.remove('loading');
      document.body.classList.add('loaded');
    }, 2500); // 2500 millisecondes = 2,5 secondes
  }, []);

  return (
    <div>
      <Loader />
      <Header />
      <main id="top-page">
        <section className="welcome-container">
          <h3>Bienvenue sur mon portfolio !</h3>
          <p>
            Bienvenue sur mon site portfolio de développeur ! Ici, vous
            découvrirez mon parcours professionnel, mes compétences en
            développement, et mes projets les plus récents. Explorez mon
            portfolio pour en apprendre davantage sur mes réalisations.
          </p>{" "}
          <p>
            Que vous soyez un recruteur à la recherche de talents ou simplement
            curieux d'en savoir plus sur mon travail, je vous invite à parcourir
            ces pages pour plonger dans mon univers créatif. Merci de votre
            visite et n'hésitez pas à me contacter pour discuter de projets
            futurs.
          </p>
        </section>
        <div className="layout">
          <section className="intro-container">
            <div className="profile-section">
              <div className="profile-section-text">
                <h3 className="typedTitle">Bonjour,</h3>
                <p className="paragraphTyped">
                  Je m'appelle Tanguy Strub, j'ai 26 ans et je suis développeur{" "}
                  <br></br>
                  <span className="typedText">{typedText}</span>
                  <span>
                    <Cursor />
                  </span>
                </p>
              </div>

              <img
                className={profilePictureClasses}
                src={ProfilePicture2}
                alt="tanguy strub developpeur front-end web"
                onClick={handleProfilePictureClick}
              ></img>
            </div>
            <BtnDownload
              btnText={" Téléchargez mon CV"}
              fileUrl={
                "https://drive.google.com/u/0/uc?id=1mB2xGa10rqBOQrGbTUwjKJ_JzBLwbuzf&export=download"
              }
            />
          </section>
          <div className="titre-section">
            <h2>&#60;</h2>
            <h2 className="color-first-letter">Compétences</h2>
            <h2>&#62;</h2>
          </div>
          <section className="competence-section">
            <CompBar
              titre="Javascript"
              icone={<i className="fa-brands fa-square-js"></i>}
              pourcentage={40}
              couleur="rgb(240, 219, 79)"
            />
            <CompBar
              titre="HTML5"
              icone={<i className="fa-brands fa-html5"></i>}
              pourcentage={75}
              couleur="rgb(227, 76, 38)"
            />
            <CompBar
              titre="CSS3"
              icone={<i className="fa-brands fa-css3-alt"></i>}
              pourcentage={80}
              couleur="rgb(41, 101, 241)"
            />
          </section>
        </div>
        <a
          className="navigationAnchor"
          href="#top-page"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          aria-label="Revenir en haut de la page"
        >
          <i className={faGoingUpIcone}></i>
        </a>
      </main>

      <Particles />
      <Footer />
    </div>
  );
}

export default Home;

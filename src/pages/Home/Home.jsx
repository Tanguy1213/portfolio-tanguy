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
    if (isAnimating) {
      setTimeout(() => {
        setIsAnimating(false);
        setIsClickable(true); // Réactivez la possibilité de cliquer après l'animation
      }, 1000);
      setIsClickable(false); // Désactivez la possibilité de cliquer pendant l'animation
    }
  }, [isAnimating]);

  const profilePictureClasses = `profile-picture-style${
    isFlipped ? " flipped" : ""
  }`;

  const [iconeIsHovered, seticoneIsHovered] = useState(false);
  const handleMouseEnter = () => {
    seticoneIsHovered(true);
  };
  const handleMouseLeave = () => {
    seticoneIsHovered(false);
  };
  const faGoingUpIcone = iconeIsHovered
    ? "fa-solid fa-angles-up fa-xl fa-bounce"
    : "fa-solid fa-angles-up fa-xl";

  const [typedText] = useTypewriter({
    words: [" Front-end", " JavaScript", " React"],
    loop: {},
  });

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
          <section className="competences-container">
            <CompBar
              titre="Javascript"
              icone={<i className="fa-brands fa-square-js"></i>}
              pourcentage={40}
              couleur="#f0db4f"
            />
            <CompBar
              titre="HTML5"
              icone={<i className="fa-brands fa-html5"></i>}
              pourcentage={75}
              couleur="#e34c26"
            />
            <CompBar
              titre="CSS3"
              icone={<i className="fa-brands fa-css3-alt"></i>}
              pourcentage={80}
              couleur="	#2965f1"
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

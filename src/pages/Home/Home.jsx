import React, { useState } from "react";
import "./Home.scss";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import ProfilePicture2 from "../../assets/images/Profile-picture-reel.png";
import BtnDownload from "../../components/BtnDownload/BtnDownload";
import Particles from "../../components/Particles";
import Loader from "../../components/Loader/Loader";

function Home() {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleProfilePictureClick = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setIsFlipped(!isFlipped);
      setTimeout(() => {
        setIsAnimating(false);
      }); // Durée de l'animation en millisecondes (ajustez selon vos besoins)
    }
  };
  const profilePictureClasses = `profile-picture-style${
    isFlipped ? " flipped" : ""
  }`;

  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  const faGoingUpIcone = isHovered
    ? "fa-solid fa-angles-up fa-xl fa-bounce"
    : "fa-solid fa-angles-up fa-xl";

  return (
    <div>
      <Loader />
      <Header />
      <main id="top-page">
        <section className="welcome-container">
          <h3>Bienvenue sur mon portfolio !</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </section>
        <div className="layout">
          <section className="intro-container">
            <div className="profile-section">
              <div className="profile-section-text">
                <h3>Adieu c't'équipe</h3>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
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
              btnText={
                " Téléchargez mon CV"
              }
              fileUrl={
                "https://drive.google.com/u/0/uc?id=1mB2xGa10rqBOQrGbTUwjKJ_JzBLwbuzf&export=download"
              }
            />
          </section>
          <section className="content-container">
            <div className="content1"></div>
            <div className="content-wrapper1">
              <div className="content2"></div>
              <div className="content3"></div>
              <div className="content4"></div>
            </div>
            <div className="content1"></div>
          </section>

        </div>
        <a
          className="navigationAnchor"
          href="#top-page"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
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

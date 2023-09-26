import React, { useState } from "react";
import "./Home.scss";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import ProfilePicture from "../assets/images/Profile-picture-tanguy.png";
import BtnDownload from "../components/BtnDownload/BtnDownload";
import Particles from "../components/Particles";


function Home() {
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
      <Header />
      <main id="top-page">
        <section className="welcome-container">
          <h3>Bienvenu sur mon portfolio !</h3>
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
        <section className="intro-container">
          <div className="slide-1">
            <p>Ceci est mon portfolio</p>
          </div>
          <div className="slide-2">
            <p>
              Ceci est mon portfolio
            </p>
          </div>
          <img
            className="profile-picture-style"
            src={ProfilePicture}
            alt="tanguy strub developpeur front-end web"
          ></img>
          <BtnDownload
            btnText={"Téléchargez mon CV"}
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

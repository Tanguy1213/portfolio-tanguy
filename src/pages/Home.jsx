import React from "react";
import "./Home.scss";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import ProfilePicture from "../assets/images/Profile-picture-tanguy.png"
import BtnDownload from "../components/BtnDownload/BtnDownload";

function Home() {
  return (
    <div>
      <Header />
      <main id="top-page">
        <section className="welcome-container">
          <h3>Bienvenu sur mon portfolio !</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
            in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
            occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim 
            id est laborum.</p>
        </section>
        <div className="boxTest">
          <img className="profile-picture-style" src={ProfilePicture} alt="tanguy strub developpeur front-end web"></img>
          <div className="slide-1">
            <p>Ceci est mon portfolio</p>
          </div>
          <div className="slide-2">
            <p>Ceci est mon portfolio</p>
          </div>
          <div className="slide-3"> 
            <p>Ceci est mon portfolio</p>
          </div>
          <div className="slide-4"> 
            <p>Ceci est mon portfolio</p>
          </div>
          <BtnDownload 
          btnText={"Télécharger mon CV en PDF"}
          fileUrl={"TEST2.pdf"}          
          fileName={"CV_Strub_Tanguy.pdf"}
          />
        </div>
      </main>
      <Footer/>
    </div>
  );
}

export default Home;

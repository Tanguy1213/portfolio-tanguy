import React from "react";
import Loader from "../components/Loader";
import "./Home.scss";

function Home() {
    return (
        <div>
            <Loader />
            <header></header>
            <main>
                <div className="boxTest">
                <p>Ceci est mon portfolio</p>
                </div>
            </main>
            <footer></footer>
        </div>
      );
}

export default Home;
import React from "react";
import "./Home.css";
import googlePlay from "../images/btn-google-play.jpg";

import Screenshot1 from "../images/1_OK.png";
import Routes from "../Routes";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="Home">
      <div className="Caroussel">

        <div className="lander">
          <h1>Mangez enfin ce qui vous ressemble !</h1>
          <p>Découvrez votre profil pour établir votre carte d'identité alimentaire. Renseignez votre objectif et laissez nous vous proposer ce qui est le meilleur pour vous.</p>
          <a href="#" className="btn btn-primary btn-lg  color-E58204" role="button" aria-pressed="true">En savoir plus</a>


        </div>
        <div className="lander-2">
        <img src={Screenshot1} alt = "Découvrez votre profil alimentaire" />

        </div>
      </div>
      <div className="Download">
      <p className="bold-p">Accédez à ProfilFood en toute simplicité, où que vous soyez.</p>
    <a href="https://play.google.com/store/apps/details?id=com.CTdev.profilfood" className="btnGoogleplay" role="button" aria-pressed="true"> <img  src={googlePlay} alt = "Google Play - ProfilFood" /></a>

</div>
    </div>
  );
}

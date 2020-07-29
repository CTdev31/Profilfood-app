import React from "react";
import "./Home.css";
import googlePlay from "../images/btn-google-play.jpg";

import { Link } from "react-router-dom";
import Carousel from "../components/carousel"

import ScreenshotAide from "../images/Screenshot_Aide.png";
import ScreenshotAide_1 from "../images/Screenshot_Aide_1.png";
import ScreenshotAide_2 from "../images/Screenshot_Aide_2.png";
import ScreenshotAliment from "../images/Screenshot_Aliment.png";
import ScreenshotRecette from "../images/Screenshot_Recette.png";
import ScreenshotRecette_1 from "../images/Screenshot_Liste_Recette.png";
import ScreenshotRecette_2 from "../images/Screenshot_Recette_Suggestion.png";


import Logo from "../images/logo_puzzle_512.png";


export default function Home() {
  return (
    <div className="Home">

      <Carousel />

      <div className="Download">
      <p className="bold-p">Accédez à ProfilFood en toute simplicité, où que vous soyez.</p>
      <a href="https://play.google.com/store/apps/details?id=com.CTdev.profilfood" className="btnGoogleplay" role="button" aria-pressed="true"> <img  src={googlePlay} alt = "Google Play - ProfilFood" /></a>
      </div>

      <div className = "faq-appli">
      <div className="lander-2-Questions">
        <h1>Des réponses à toutes vos questions</h1>
        <p>Pour maximiser votre apprentissage avec <span class="orange">ProfilFood</span>, plusieurs sections d'aide sont à votre diposition dans l'application.  <br/>
        La <Link to="/faq">foire aux questions</Link> regroupant les questions les plus rencontrées est également là pour vous guider. <br/> Enfin, si une réponse vous manque, posez nous votre question et on y répondra.</p>

      </div>

        <div className="lander-3">
        <img className="left-img-aide" src={ScreenshotAide_1} alt = "Exemple 1 - Aide" />
        <img className="main-img-aide" src={ScreenshotAide} alt = "Aide en ligne" />
        <img className="right-img-aide" src={ScreenshotAide_2} alt = "Exemple 2 - Aide" />

        </div>


      </div>


      <div className = "recette-aliment">
        <div className="lander-3-aliment">
        <h1>Des ingrédients <span class="orange">notés</span> pour <span class="orange">vous</span></h1>
        <p>Chaque personne est <span class="orange">unique</span>, la nourriture de l'un est le poison de l'autre. Alors pour vous aidez à trouver les aliments qui vous corresponde, nous les avons notés selon plusieurs facteurs liés à votre profil.
        <br/>Découvrez quels sont ceux qui s'adaptent le mieux à votre constitution !</p>

        <img className="left-img-aliment" src={ScreenshotAliment} alt = "Notation des aliments selon votre profil" />

        </div>

        <div className="lander-4">
          <h1>Des centaines de recettes <span class="orange">healthy</span> existantes</h1>
          <p>Créez ou retrouvez vos recettes favorites en bénéficiant d'alternatives saines pour remplacer les aliments trasformés.
          <br/> Filtrez les recettes, recherchez, planifiez, cuisinez ! Allez-vous opter pour une Recette sans gluten ? vegan ? végétarienne ? paléo ? sans sucre ? ... Faites vous plaisir !</p>
          <img className="left-img-aide" src={ScreenshotRecette} alt = "Liste des recettes existantes" />
          <img className="main-img-aide" src={ScreenshotRecette_1} alt = "Fiche de la recette" />
          <img className="right-img-aide" src={ScreenshotRecette_2} alt = "Suggestion d'ingrédients sains" />
        </div>
      </div>

      <div className="Download">
      <img className="center-logo" src={Logo} alt = "Logo de ProfilFood" />

      <h1>Premiers pas avec ProfilFood</h1>
      <a href="https://play.google.com/store/apps/details?id=com.CTdev.profilfood" className="btnGoogleplay" role="button" aria-pressed="true"> <img  src={googlePlay} alt = "Google Play - ProfilFood" /></a>
      </div>


      <div className="transition">
        </div>

    </div>
  );
}

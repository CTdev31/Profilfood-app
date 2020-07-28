import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import Screenshot1 from "../images/Screenshot_1.png";
import Screenshot2 from "../images/Screenshot_2.png";
import Screenshot3 from "../images/Screenshot_3.png";
import Screenshot4 from "../images/Screenshot_4.png";
import Screenshot5 from "../images/Screenshot_5.png";
import Screenshot6 from "../images/Screenshot_6.png";
import Screenshot7 from "../images/Screenshot_7.png";
import Screenshot8 from "../images/Screenshot_8.png";
import Screenshot9 from "../images/Screenshot_9.png";
import Screenshot10 from "../images/Screenshot_10.png";

import "./carousel.css";
import BtnNext from "../images/btn-next.png";
import BtnPrevious from "../images/btn-previous.png";


export default class extends React.Component {
  render() {
    return (
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={600}
        totalSlides={10}
        infinite={true}
      >
        <Slider className = "Slide-carousel">
          <Slide index={0}>
          <div className="lander">
            <h1>Mangez enfin ce qui vous ressemble !</h1>
            <p>Découvrez votre profil pour établir votre carte d'identité alimentaire. Renseignez votre objectif et laissez nous vous proposer ce qui est le meilleur pour vous.</p>
            <a href="#" className="btn btn-primary btn-lg color-E58204" role="button" aria-pressed="true">En savoir plus</a>


          </div>
          <div className="lander-2">
          <img src={Screenshot1} alt = "Découvrez votre profil alimentaire" />

          </div>
          </Slide>
          <Slide index={1}>
          <div className="lander">
            <h1>Optimisez votre alimentation pour de bon !</h1>
            <p>Indiquez vous même vos besoins alimentaires ou laissez l'application les calculer pour vous. Prenez du plaisir à manger, on s'occupe de votre progression !</p>
            <a href="#" className="btn btn-primary btn-lg  color-E58204" role="button" aria-pressed="true">En savoir plus</a>


          </div>
          <div className="lander-2">
          <img src={Screenshot2} alt = "Optimisez votre alimentation (kcal, macro-nutriments, fibres, IG, ...)" />

          </div>
          </Slide>

          <Slide index={2}>
          <div className="lander">
            <h1>Apprenez à savoir qui vous êtes vraiment !</h1>
            <p>Répondez à près de 100 questions pour cerner toutes les facettes de votre profil. Morphologie, nature, métabolisme, ... Il y en a pour tous les goûts !</p>
            <a href="#" className="btn btn-primary btn-lg  color-E58204" role="button" aria-pressed="true">En savoir plus</a>


          </div>
          <div className="lander-2">
          <img src={Screenshot3} alt = "Répondez à près de 100 questions pour établir votre profil" />

          </div>
          </Slide>

          <Slide index={3}>
          <div className="lander">
            <h1>Découvrez ce que les médecines alternatives dises sur vous.</h1>
            <p>Quels sont les points faibles et les forces de votre profil ? Optenez des conseils personnalisés provenant de la Naturopathie, de l'ayurvéda, ou encore de la médecine chinoise.</p>
            <a href="#" className="btn btn-primary btn-lg  color-E58204" role="button" aria-pressed="true">En savoir plus</a>


          </div>
          <div className="lander-2">
          <img src={Screenshot4} alt = "Profil : Naturopathie, ayurvéda, groupe sanguin, métabolisme, ..." />

          </div>
          </Slide>

          <Slide index={4}>
          <div className="lander">
          <h1>Invitez votre famille ou vos colocataires !</h1>
          <p>Créez ou invitez jusqu'à 8 comptes pour gagner du temps dans l'organisation de vos repas. Chaque profil est unique, comprenez pourquoi votre enfant n'est pas attiré par un groupe d'aliment.</p>
          <a href="#" className="btn btn-primary btn-lg  color-E58204" role="button" aria-pressed="true">En savoir plus</a>


          </div>
          <div className="lander-2">
          <img src={Screenshot5} alt = "Invitez ou créez les membres de votre famille" />

          </div>
          </Slide>

          <Slide index={5}>
          <div className="lander">
            <h1>Ajoutez les repas de votre famille avec facilité !</h1>
            <p>Ajoutez des aliments et des recettes existants ou bien créez les ! Gérer vous même vos proportions de vos plats, ou bien faites confiance à l'application pour les gérer à votre place.</p>
            <a href="#" className="btn btn-primary btn-lg  color-E58204" role="button" aria-pressed="true">En savoir plus</a>


          </div>
          <div className="lander-2">
          <img src={Screenshot6} alt = "Ajoutez vos repas" />

          </div>
          </Slide>


          <Slide index={6}>
          <div className="lander">
            <h1>Renseignez vos repas pour accéder aux notes nutritionnelles</h1>
            <p>Découvrez le bilan nutritionnel de chaque repas, et de votre journée. Vos repas sont-ils équilibrés ? Sont-ils adaptés à votre profil et à votre objectif ? On vous dit tout !</p>
            <a href="#" className="btn btn-primary btn-lg  color-E58204" role="button" aria-pressed="true">En savoir plus</a>


          </div>
          <div className="lander-2">
          <img src={Screenshot7} alt = "Obtenez les notes de vos repas" />

          </div>
          </Slide>

          <Slide index={7}>
          <div className="lander">
            <h1>Visualisez le bilan nutritionnel de vos repas !</h1>
            <p>Qu'il s'agisse de conseils généraux ou individuel, découvrez comment améliorer votre assiète. <br/> kCal, Glucide, Lipide, Protéine, Fibre, Charge glycémique, aliments naturels, type de cuisson, texture, saison,... Rien n'est noté au hasard ! </p>
            <a href="#" className="btn btn-primary btn-lg  color-E58204" role="button" aria-pressed="true">En savoir plus</a>


          </div>
          <div className="lander-2">
          <img src={Screenshot8} alt = "Découvrez les conseils alimentaires" />

          </div>
          </Slide>

          <Slide index={8}>
          <div className="lander">
            <h1>Plannifiez vos menus avant d'aller faire vos courses !</h1>
            <p>Anticipez vos repas en profitant d'un planning dynamique et d'une liste de courses qui se génére ... toute seule ! </p>
            <a href="#" className="btn btn-primary btn-lg  color-E58204" role="button" aria-pressed="true">En savoir plus</a>


          </div>
          <div className="lander-2">
          <img src={Screenshot9} alt = "Plannifiez vos repas" />

          </div>
          </Slide>

          <Slide index={9}>
          <div className="lander">
            <h1>Faites vos courses en toute simplicité !</h1>
            <p>Avec ou sans connexion internet, cochez, décochez, ajoutez, supprimez autant d'articles que vous souhaitez. Gagnez du temps pour mieux cuisiner !</p>
            <a href="#" className="btn btn-primary btn-lg  color-E58204" role="button" aria-pressed="true">En savoir plus</a>


          </div>
          <div className="lander-2">
          <img src={Screenshot10} alt = "Liste de courses automatique" />

          </div>
          </Slide>
        </Slider>
          <ButtonBack className="btn-back"><img src={BtnPrevious} alt = "Previous" /></ButtonBack>
          <ButtonNext className="btn-next"><img src={BtnNext} alt = "Next" /></ButtonNext>
      </CarouselProvider>
    );
  }
}

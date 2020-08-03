import React from 'react';


import "./faq.css";


export default class extends React.Component {
  render() {
    return (

    <div className="panel-group" id="accordion">

    <div className="faqHeader"><h1>Foire aux questions</h1></div>
    <div className="generalHeader"><h2>Général</h2></div>

    <div className="panel panel-default">
        <div className="panel-heading">
            <h4 className="panel-title">
                <a className="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseOne">A qui s'adresse l'application ProfilFood ?</a>
            </h4>
        </div>
        <div id="collapseOne" className="panel-collapse collapse">
            <div className="panel-body">
                Venez comme vous êtes, c'est pour votre <strong>bien !</strong>
                <br />
                L'application est destinée à toutes personnes souhaitant optimiser son alimentation pour de bon et surtout <strong>durablement. </strong>
                  <br/> ProfilFood ne préconise pas les régimes ou les restrictions caloriques, mais favorise plutôt une alimentation <strong>moins industrielle et en adéquation avec vos réels besoins. </strong>
                  <br/> L'application est également dotée de nombreuses fonctionnalités pour vous permettre de gagner du temps au quotidien dans l'organisation des repas et des courses.
                <br />Bientôt ProfilFood sera enrichie de plans alimentaire générés automatique et adaptés avec votre profil et objectifs nutritionnels.
                <br />Si ces problématiques sont les vôtres, et si sous possédez un smartphone Android 5 ou supérieur, alors l'application est faite pour vous.
            </div>
        </div>
    </div>
    <div className="panel panel-default">
        <div className="panel-heading">
            <h4 className="panel-title">
                <a className="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo">Dois-je obligatoirement créer un compte pour utiliser l'application ? Quel est l'intêret des modes en ligne et hors ligne ?</a>
            </h4>
        </div>
        <div id="collapseTwo" className="panel-collapse collapse">
            <div className="panel-body">
                Oui, la création du compte est nécessaire pour créer votre profil et ainsi pouvoir éventuellement partager vos données (planning, liste de course, ...) avec vos proches. Rendez-vous dans l'onglet mon compte pour activer ou non le mode en ligne :
                <br/> Avec le mode en ligne, partagez toutes vos données avec votre famille ou un groupe de coachés.
                <br/> Avec le mode hors ligne, privatisez vos données pour une meilleure optimisation de l'application sur votre smartphone. Les recettes publiques et aliments restent tout de même synchronisés lorsque le téléphone est connecté à internet.
            </div>
        </div>
    </div>
    <div className="panel panel-default">
        <div className="panel-heading">
            <h4 className="panel-title">
                <a className="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseThree">Puis-je utiliser l'application sans connexion internet ?</a>
            </h4>
        </div>
        <div id="collapseThree" className="panel-collapse collapse">
            <div className="panel-body">
                La connexion internet est uniquement requise lors de la création du compte et pour initialiser une première fois les données de l'application.
                <br />Ensuite la connexion n'est pas obligatoire et <strong>l'application peut fonctionner en mode avion si vous ne partagez pas vos données avec vos proches.</strong>
                <br />
                Sans connexion, vous n'aurez en revanche pas accès aux toutes dernières mises à jour des recettes et aliments ajoutés par d'autres utilisateurs.
            </div>
        </div>
    </div>
    <div className="panel panel-default">
        <div className="panel-heading">
            <h4 className="panel-title">
                <a className="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseFour">L'application est-elle disponible sur Iphone ou Ipad ?</a>
            </h4>
        </div>
        <div id="collapseFour" className="panel-collapse collapse">
            <div className="panel-body">
                A ce jour, l'application n'est disponible que pour téléphone Android.
                  <br/> Vous souhaitez être au courant des dernières nouveautés et ne surtout pas manquer le lancement sur plateforme IOS ? Abonnez-vous au compte <span><a href="https://www.instagram.com/profilfood.app/?hl=fr">Instagram</a></span> pour être au courant des dernières nouveautés.
            </div>
        </div>
    </div>
    <div className="panel panel-default">
        <div className="panel-heading">
            <h4 className="panel-title">
                <a className="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseFive">L'application est-elle disponible sur tablette Android ?</a>
            </h4>
        </div>
        <div id="collapseFive" className="panel-collapse collapse">
            <div className="panel-body">
            A ce jour, l'application n'est disponible que pour téléphone Android.
              <br/> Vous souhaitez être au courant des dernières nouveautés et ne surtout pas manquer le lancement sur tablette Android ? Abonnez-vous au compte <span><a href="https://www.instagram.com/profilfood.app/?hl=fr">Instagram</a></span> pour être au courant des dernières nouveautés.

            </div>
        </div>
    </div>
    <div className="panel panel-default">
        <div className="panel-heading">
            <h4 className="panel-title">
                <a className="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseSix">Dois-je payer pour utiliser ProfilFood ?</a>
            </h4>
        </div>
        <div id="collapseSix" className="panel-collapse collapse">
            <div className="panel-body">
                <strong>La version actuelle de ProfilFood (v2) est entièrement gratuite</strong>. ProfilFood restera gratuit durant la durée du programme de Beta test.
                <br/>Mais le développement d'une telle application a un coût et des serveurs informatiques, notamment pour s’assurer de la sécurité de chacune données, sont utilisés.
              <br/>  Pour que ProfilFood puisse continuer à évoluer, nous devons rémunérer chaque acteur de cette aventure à sa juste valeur.
                <br/>
                C’est pourquoi certaines fonctionnalités pourraient devenir payantes, ceci pour le meilleur intérêt de chacun.
                <br/>
                Ces offres doivent vous convenir et vous correspondre. Nous vous encourageons à nous faire part régulièrement de vos attentes, vos besoins, et vos suggestions d’amélioration.
            </div>
        </div>
    </div>
    <div className="panel panel-default">
        <div className="panel-heading">
            <h4 className="panel-title">
                <a className="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseSeven">Mon smartphone est-il trop ancien pour utiliser l'application ?</a>
            </h4>
        </div>
        <div id="collapseSeven" className="panel-collapse collapse">
            <div className="panel-body">
                Si <strong>Android 5 ou supérieur</strong> est installé sur votre téléphone, vous pouvez télécharager l'application.
                <br />
                Mise à part la durée d'exécution des fonctionnalités qui varie d'un téléphone à l'autre selon ses performances, et l'affichage plus ou moins grand selon la taille de l'écran, l'application reste fonctionnelle sur ces smartphones.
            </div>
        </div>
    </div>

    <div className="generalHeader"><h2>Alimentation et références</h2></div>
    <div className="panel panel-default">
        <div className="panel-heading">
            <h4 className="panel-title">
                <a className="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseEight">Quelles sont les références de l'application ? Les conseils alimentaires proposés sont-ils vraiment bénéfiques et justes ?</a>
            </h4>
        </div>
        <div id="collapseEight" className="panel-collapse collapse">
            <div className="panel-body">
                L’expression « profilage alimentaire » est un terme « protégé » « inventé » par <span><a href="https://www.taty.be">Taty Lauwers</a></span> et utilisé par de nombreux coachs formés à cette technique.
                <br/>Il s'agit d'un mélange de médecines alternatives reconnues par l'OMS combiné aux notions d'environnement (saison, lieu de résidence), de groupe sanguin, de métabolisme, ect ...
                <br/>Aujourd'hui cette technique a fait ces preuves sur de nombreuses personnes et s'avère compatible avec la société actuelle où il est très facile de se perdre avec tous ces régimes et ces soit disant aliments miracles.
                <br/>Aujourd'hui plus que jamais, l'énergie vitale est la clé de la réussite de l'homme aussi bien pour réussir ces projets que pour combattre les stress et virus d'un monde de plus en plus malade. Il serait donc dommage de la gaspiller avec des aliments non adaptés à votre système digestif.
                <br/>Enfin, la majorité des conseils donnés proviennent directement des médecines alternatives comme la Naturopathie ou l'Ayurveda qui sont reconnues par l'OMS, ils ne peuvent donc que vous faire progresser dans votre quête d'une vie meilleure.
            </div>
        </div>
    </div>
    <div className="panel panel-default">
        <div className="panel-heading">
            <h4 className="panel-title">
                <a className="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseNine">J'ai peur que de renseigner mes repas ait un effet négatif sur mon rapport à l'alimentation et me fasse perdre mon temps.</a>
            </h4>
        </div>
        <div id="collapseNine" className="panel-collapse collapse">
            <div className="panel-body">
            L'objectif de ProfilFood n'est pas de vous rendre dépendant, mais plutôt de <strong>vous aider à devenir plus autonome avec votre alimentation</strong>. A terme, vous ne devriez plus avoir besoin d'une application pour savoir quelle nourriture vous convient.
              <br />
            Découvrez votre profil, comprenez qui vous êtes, complétez vos repas, expérimentez et analysez votre évolution !
            <br />Utliser ProfilFood pourra parfois vous sembler redondant, mais c'est en l'utilisant que vous apprendrez à manger selon vos réels besoins.
              </div>
        </div>
    </div>
    <div className="panel panel-default">
        <div className="panel-heading">
            <h4 className="panel-title">
                <a className="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseTen">Comment les notes des aliments sont-elles calculées ?</a>
            </h4>
        </div>
        <div id="collapseTen" className="panel-collapse collapse">
            <div className="panel-body">
                Parmi les centaines d'aliments, chacun d'entre eux possède <strong>un système de notation en rapport avec les facteurs du profilage alimentaire</strong>.
                <br />Selon votre profil, plusieurs notes sont calculées selon ces facteurs (métabolisme, morpho-type, nature, groupe sanguin, saison,...) et la moyenne pondérée donne la note finale.
                <br />C'est pourquoi la note d'un aliment peut-être différente si l'un de ces facteurs est modifié ou pour chaque nouvelle saison.
                <br />Ce système de notation tirées de livres santés les plus reconnus et ayant donnée satisfaction à de nombreuses personnes :
                <br />• 4 groupes sanguins - 4 régimes de Peter j d Adamo
                <br />• Alimentation et santé selon l'Ayurvéda de Joyce Villaume-Le Don
                <br />• Diététique ayurvédique de Indrajit Garai
                <br />• Ayurvéda pratique de Sivananda Yoga Vedanta
                <br />• MON COATCH NATURO de Natacha Gunsburger
                <br />• Le grand livre de la naturopathie de Christian Brun
                <br />• The Metabolic Typing Diet de Bill Wolcott
            </div>
        </div>
    </div>
    <div className="panel panel-default">
        <div className="panel-heading">
            <h4 className="panel-title">
                <a className="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseEleven">Comment les notes des repas sont-elles calculées ?</a>
            </h4>
        </div>
        <div id="collapseEleven" className="panel-collapse collapse">
            <div className="panel-body">
                Pour chaque repas, 2 notes sont calculés : <strong>la note générique</strong> et <strong>la note individuelle</strong>.
                <br />
                <strong>Pour la note générique</strong>, le repas est noté selon son équilibre et sa composition de manière globale :
                <br />Le repas est-il de saison ? Contient-il des aliments transformés ? Les macronutriments sont-ils équilibrés ? La charge glycémique n'est elle pas trop élevée ? ect ...
                <br />Toutes ces questions permette d'obtenir une note/100 selon la composition du repas. C'est un bon indicateur mais dans certains cas, un repas qui parait très équilibré peut être incompatible pour tel ou tel profil.
                <br />
                <br />
                <strong>Pour la note individuelle</strong>, les paramètres pris en compte sont reliés à votre profil et objectifs :
                <br />Le repas est-il composé d'aliments bénéfiques à votre profil ? La cuisson du repas convient-elle à votre profil ? Le total calorique et les macronutriments sont-ils en adéquations avec vos besoins ? ect ...
                <br />Avec cette note/100, vous êtes sûre d'évaluer correctement votre repas et son impact vis-à-vis de votre santé.
            </div>
        </div>
    </div>
    <div className="panel panel-default">
        <div className="panel-heading">
            <h4 className="panel-title">
                <a className="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseTwelve">Puis-je créer un aliment s'il n'existe pas ?</a>
            </h4>
        </div>
        <div id="collapseTwelve" className="panel-collapse collapse">
            <div className="panel-body">
                Oui il est possible de créer un aliment et en faire bénéficier la communauté ProfilFood.
                <br />Cependant, vous pourrez renseigner seulement le nom et la composition nutritionnelle de l'aliment. <strong>L'aliment ajouté sera ensuite analysé et noté par un administrateur de ProfilFood</strong>.
                <br />La mise à jour des notes de l'aliment interviendra quelques heures après l'avoir ajouté.
            </div>
        </div>
    </div>

    <div className="generalHeader"><h2>Profil et famille</h2></div>
    <div className="panel panel-default">
        <div className="panel-heading">
            <h4 className="panel-title">
                <a className="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseThreteen">Mon profil peut-il évoluer au cours du temps ?</a>
            </h4>
        </div>

        <div id="collapseThreteen" className="panel-collapse collapse">
            <div className="panel-body">
              Dès la naissance, notre constitution de base est établie de part la génétique et le profil de nos parents. Si par exemple nos 2 parents sont de profil Sanguin, il y a de forte chance pour nous le soyons aussi.
              <br/>Par la suite, notre profil évolue au fil des années en fonction de nos actions, de l'environnement, de notre nourriture, ... <strong>Notre constitution de base est le profil qui nous correspond le mieux et vers le quel nous devrions tendre et équilibrer</strong>.
              <br/>C'est pourquoi il important de répondre aux questionnaires en se focalisant sur votre constitution du moment et non sur celui de votre jeune enfance.
              <br/>Si vous sentez que votre profil a évolué suite à une modification d'alimentation, ou d'environnement, vous pouvez ajuster votre profil en le modifiant manuellement ou en re-répondant aux 4 questionnaires.
            </div>
        </div>
    </div>
    <div className="panel panel-default">
        <div className="panel-heading">
            <h4 className="panel-title">
                <a className="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseFourteen">Mes enfants ne sont-ils pas trop jeunes pour leur créer un compte ?</a>
            </h4>
        </div>
        <div id="collapseFourteen" className="panel-collapse collapse">
            <div className="panel-body">
                Dès lors que votre enfant partage les mêmes repas que ses parents, il est possible de lui créer un compte afin d'intégrer ses portions dans la planification des repas mais surtout pour vous aider à lui donner les aliments dont il a besoin.
                <br />Un enfant a des besoins différents de ceux des adultes et ProfilFood en tient compte dans ses calculs. D'une manière générale un enfant tolère davantage d'aliment en comparaison avec un adulte car son énergie vitale est grande, mais a plus besoin de glucides.
                 <br />Mais la aussi, chaque enfant est différent et doit s'approprier une nourriture qui lui apporte l'énergie dont il a besoin pour se développer. C'est pourquoi ProfilFood tiens aussi compte de l'age pour vous conseiller ce qui est le meilleur pour vos proches.

            </div>
        </div>
    </div>
    <div className="panel panel-default">
        <div className="panel-heading">
            <h4 className="panel-title">
                <a className="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseFiveteen">Comment suis-je sûre que l'application ait identifiée mon véritable profil ?</a>
            </h4>
        </div>
        <div id="collapseFiveteen" className="panel-collapse collapse">
            <div className="panel-body">
                Sur l'application, Le déroulement de l'identification du profil est le suivant :
                <br /><strong>Première étape </strong>: Je répond au mini questionnaire d'introduction au moment de la création du compte. Cette dizaine de questions permet à ProfilFood d'identifier rapidement votre profil.
                <br />Mais votre profil n'est peut être le bon car les réponses aux questions n'étaient pas suffisemment précises.
                <br /><strong>Deuxième étape </strong>: J'affine mon profil en répondant aux quatre questionnaires (près de 100 questions au total). Avec ces nombreuses réponses, les chances de se tromper sont beaucoup moins élevées.
                <br />Toutes ces réponses ainsi que les données rentrées auparavant (age, sexe, niveau d'activité, groupe sanguin, taille, poids, objectif, ...) vous permettent d'obtenir votre profil.
                <br /><br />Mais si vos réponses n'étaient pas les bonnes, ou si vous ne savez pas évaluez votre profil, n'hésitez pas à contacter notre support technique (contact@profilfood.com) ou bien prenez rendez-vous avec un médecin référent pratiquant la naturopathie, l'ayurvéda, ou le profilage alimentaire.
            </div>
        </div>
    </div>
    <div className="panel panel-default">
        <div className="panel-heading">
            <h4 className="panel-title">
                <a className="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseSixteen">Comment puis-je inviter une personne dans ma famille ?</a>
            </h4>
        </div>
        <div id="collapseSixteen" className="panel-collapse collapse">
            <div className="panel-body">
                Rendez-vous sur la fenêtre <strong>"Ma famille"</strong> pour inviter une personne en saisissant son adresse mail.
                <br />La personne reçoit le mail d'invitation, puis elle peut créer son compte avec cette même adresse. Une fois inscrite, elle rejoindra votre famille et <strong>vos données seront partagées</strong>.
                <br />Cette personne pourra ajouter des recettes, renseigner des repas, ajouter des aliments sur la liste de courses, ...
                <br /> En revanche seul l'administrateur de la famille (le créateur) pourra modifier ou supprimer les comptes connectés à sa famille.
            </div>
        </div>
    </div>
    <div className="panel panel-default">
        <div className="panel-heading">
            <h4 className="panel-title">
                <a className="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseSeventeen">Je suis coach ou nutritionniste, puis-je utiliser la famille pour planifier les menus de mes élèves ?</a>
            </h4>
        </div>
        <div id="collapseSeventeen" className="panel-collapse collapse">
            <div className="panel-body">
                Il est possible d'utiliser cette fonctionnalités dans ce cadre dans la limite de 7 invité (<strong>8 personnes par famille</strong>).
                <br />
                Dans la mesure du possible, essayez regrouper vos élèves ayant un profil qui se rapproche pour une planification des repas similaires. Vous pourrez ainsi profiter de la <strong>répartition des portions automatique calculée en fonction des besoins caloriques de chacun</strong>.
                <br />Exemple : S'il y a 2 personnes dont une première qui a besoin de 3000 kcal et l'autre de 2000 kcal, un repas contenant 5 portions au total sera distribué de manière proportionnelle (3 portions pour la premières personnes, 2 pour la secondes).
                <br />
                <br />Il est aussi possible de créer des comptes "enfant" pour chacun des élèves. Vous créez alors vous même les profils de chaque personne puis renseignez leur repas. Cette option est préférable si vous ne souhaitez pas imposer à vos élèves d'utiliser l'application.
            </div>
        </div>
    </div>

    <div className="generalHeader"><h2>Activité quotidienne et objectifs</h2></div>
    <div className="panel panel-default">
        <div className="panel-heading">
            <h4 className="panel-title">
                <a className="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseEighteen">Quels sont les objectifs proposés dans l'application ?</a>
            </h4>
        </div>
        <div id="collapseEighteen" className="panel-collapse collapse">
            <div className="panel-body">
                Lorsque vous complétez votre profil, <strong>4 objectifs sont proposés</strong>. Choisissez celui qui vous correspond le mieux car il joue un rôle important dans le calcul de vos besoins nutritionnels et dans le calcul des notes des repas :
                <br />
                <strong>Bien être :</strong> Votre objectif est d'être bien dans votre corps et dans votre esprit, pour être en bonne santé. Prendre soin de sa maison intérieure permet d'avoir une énergie presque illimité afin de réaliser vos objectifs du quotidien et combattre les éventuels stress et virus."
                <br />
                <strong>Perte de poids :</strong> Votre objectif est de perdre du poids, pour vous sentir mieux dans votre corps et augmenter votre confiance en vous. On a tous une bonne raison de perdre quelques kg superflus !"
                <br />
                <strong>Prise de muscle :</strong> Votre objectif est d'augmenter votre masse musculaire, pour vous sentir mieux dans votre corps et accroître votre niveau de vitalité. Pour construire sa masse musculaire, il ne suffit pas d’enchaîner les séances de musculation. L'alimentation entre également en jeu !"
                <br />
                <strong>Sport cardio :</strong> Vous recherchez la performance dans un sport cardiovasculaire. Vous souhaitez augmenter votre capacité respiratoire et/ou votre résistance à un effort intense. Alors, l'alimentation doit être adaptée pour vous donner l'énergie nécessaire durant une séance de sport, mais également pour aider votre corps à récupérer et devenir plus fort."

            </div>
        </div>
    </div>
    <div className="panel panel-default">
        <div className="panel-heading">
            <h4 className="panel-title">
                <a className="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseNineteen">Mon activité quotidienne (nombre de pas) varie fortement d'un jour à l'autre, j'ai du mal à faire mon choix entre les 3 proposés (sédentaire, actif et très actif).</a>
            </h4>
        </div>
        <div id="collapseNineteen" className="panel-collapse collapse">
            <div className="panel-body">
                Sur la fenêtre planning, <strong>vous pouvez modifier pour chacun des jour votre niveau d'activité</strong> en cliquant sur le petit bonhomme en haut à droite de la fenêtre.
                <br />Dans les informations de votre profil, sélectionnez alors le niveau d'activité qui vous parait être celui qui est le plus adapté au votre. Ce sera celui proposé par défaut à chaque nouveau jour du planning.
            </div>
        </div>
    </div>

    <div className="generalHeader"><h2>Sécurité et dysfonctionnements</h2></div>
    <div className="panel panel-default">
        <div className="panel-heading">
            <h4 className="panel-title">
                <a className="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseTwenty">Qui peut accéder à mes données enregistrées sur ProfilFood ?</a>
            </h4>
        </div>
        <div id="collapseTwenty" className="panel-collapse collapse">
            <div className="panel-body">
                Toutes les données que vous enregistrez (profils, recettes, repas, liste de courses, ...) sont stockées sur un <strong>serveur sécurisé</strong>.
                <br /> Seul vous et les membres de votre famille sur ProfilFood peuvent avoir accès à ces informations.

            </div>
        </div>
    </div>

    <div className="panel panel-default">
        <div className="panel-heading">
            <h4 className="panel-title">
                <a className="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseTwentyOne">L'application ne démarre pas ou plante au démarrage.</a>
            </h4>
        </div>
        <div id="collapseTwentyOne" className="panel-collapse collapse">
            <div className="panel-body">
                Vérifiez que la dernière version de l'application soit bien installée.
                Si ce dysfonctionnement persiste, contactez nous par mail à <strong>contact@profilfood.com</strong>.

            </div>
        </div>
    </div>

</div>


    );
  }
}

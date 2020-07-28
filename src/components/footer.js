import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import "./footer.css";
import Mailto from "../images/mailto.png";
import InstagramIMG from "../images/instagram-img.png";
import FacebookIMG from "../images/facebook-img.png";




const FooterPage = () => {
  return (
    <MDBFooter color="blue" className="footer">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6 col-right">
          <h5 className="title">Informations</h5>
          <ul>
            <li className="list-unstyled">
              <a href="/faq">Foire aux questions</a>
            </li>
            <li className="list-unstyled">
              <a href="/cgu">Conditions générales d'utilisation</a>
            </li>
            <li className="list-unstyled">
              <a href="/charte">Charte de confidentialité</a>
            </li>

          </ul>
          </MDBCol>
          <MDBCol md="6 col-left">

            <h5 className="title">ProfilFood - Application mobile</h5>
            <p>
            <img className="mailto-img" src={Mailto} alt = "mailto" />
               contact@profilfood.com
            </p>

            <p> Suivez-nous !
            <a className = "instagram-a" href = "https://www.instagram.com/profilfood.app/?hl=fr">
               <img className="instagram-img" src={InstagramIMG} alt = "Instagram-icon" />
            </a>

            <a className = "facebook-a" href = "https://www.facebook.com/ProfilFood">
               <img className="facebook-img" src={FacebookIMG} alt = "Facebook-icon" />
            </a>
            </p>
          </MDBCol>
        </MDBRow>

      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright : <a href="https://www.profilfood.com"> profilfood.com </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default FooterPage;

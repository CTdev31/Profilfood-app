import React from 'react';
import './App.css';
//import {BrowserRouter, Route} from "react-router-dom"
//import Navbar from "./components/Navbar"

import { LinkContainer } from "react-router-bootstrap";

import { Link } from "react-router-dom";
import { Nav, Navbar, NavItem, NavDropdown } from "react-bootstrap";

import Routes from "./Routes";
import logo from "./images/logo_puzzle_512.png";

import FooterPage from "./components/footer";

function App(props) {
  return (
    <div className="App container">
      <Navbar  className="navbar-form navbar-fixed-top" responsive fluid collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/" className = "main-title" > <img src={logo} alt = "" className = "small-logo"/> ProfilFood  </Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <LinkContainer to="/" id="nav-accueil">
              <NavItem className = "item-nav">Accueil</NavItem>
            </LinkContainer>

            <NavDropdown className = "item-nav" title = "Informations" id="nav-dropdown">
            <LinkContainer to="/faq">
              <NavItem>Foire aux questions</NavItem>
            </LinkContainer>
            <LinkContainer to="/cgu">
              <NavItem>Conditions générales d'utilisation</NavItem>
            </LinkContainer>
            <LinkContainer to="/charte">
              <NavItem>Charte de confidentialité</NavItem>
            </LinkContainer>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Routes />
      <FooterPage/>


    </div>
  );
}





export default App;

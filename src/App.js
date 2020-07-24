import React from 'react';
import './App.css';
//import {BrowserRouter, Route} from "react-router-dom"
//import Navbar from "./components/Navbar"

import { LinkContainer } from "react-router-bootstrap";

import { Link } from "react-router-dom";
import { Nav, Navbar, NavItem } from "react-bootstrap";


import Routes from "./Routes";
import logo from "./images/logo_puzzle_32.png";

function App(props) {
  return (
    <div className="App container">
      <Navbar fluid collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/" className = "main-title" > <img src={logo} alt = "" className = "small-logo"/> ProfilFood  </Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <LinkContainer to="/">
              <NavItem>Accueil</NavItem>
            </LinkContainer>
            <LinkContainer to="/Services">
              <NavItem>Services</NavItem>
            </LinkContainer>
            <LinkContainer to="/Informations">
              <NavItem>Informations</NavItem>
            </LinkContainer>
            <LinkContainer to="/Contact">
              <NavItem>Contact</NavItem>
            </LinkContainer>

          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Routes />
    </div>
  );
}





export default App;

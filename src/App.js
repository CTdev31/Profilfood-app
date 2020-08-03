import React, {Component} from 'react';
import './App.css';
//import {BrowserRouter, Route} from "react-router-dom"
//import Navbar from "./components/Navbar"

import { LinkContainer } from "react-router-bootstrap";

import { Nav, Navbar, NavItem, NavDropdown } from "react-bootstrap";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from "./containers/Home";
import Faq from "./components/faq";
import Charte from "./components/charte";
import Cgu from "./components/cgu";

import logo from "./images/logo_puzzle_512.png";

import FooterPage from "./components/footer";
import ScrollToTop from "./scrollToTop";



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      classConditionbtnAccueil: "item-nav active"
    };
  }
  handleClickOtherLink = (e) => {
    const _activeClassesAccueil = "item-nav"

    this.setState({
      classConditionbtnAccueil:_activeClassesAccueil
    })
  }
  HomehandleClick = (e) => {
    const _activeClassesAccueil = "item-nav active"

    this.setState({
      classConditionbtnAccueil:_activeClassesAccueil
    })
  }
  render(){

    return (
      <Router>

        <div className="App container">
          <Navbar  className="navbar-form navbar-fixed-top" fluid collapseOnSelect>
            <Navbar.Header>
              <Navbar.Brand>
                <Link to="/" onClick={()=>{this.HomehandleClick();}} className = "main-title" > <img src={logo} alt = "" className = "small-logo"/> ProfilFood  </Link>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
              <Nav pullRight>
              <LinkContainer to="/home" id="nav-accueil">
                <NavItem className = {this.state.classConditionbtnAccueil}>Accueil</NavItem>
              </LinkContainer>


              <NavDropdown onClick={()=>{this.handleClickOtherLink();}} className = "item-nav" title = "Informations" id="nav-dropdown">
                <LinkContainer to="/faq">
                  <NavItem className = "item-nav" onClick={()=>{this.handleClickOtherLink();}} >Foire aux questions</NavItem>
                </LinkContainer>
                <LinkContainer to="/cgu">
                  <NavItem onClick={()=>{this.handleClickOtherLink();}} >Conditions générales d'utilisation</NavItem>
                </LinkContainer>
                <LinkContainer to="/charte">
                  <NavItem onClick={()=>{this.handleClickOtherLink();}} >Charte de confidentialité</NavItem>
                </LinkContainer>
              </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <ScrollToTop>
            <Switch>
              <Route path="/faq">
                <Faq />
              </Route>
              <Route path="/cgu">
                <Cgu />
                </Route>
              <Route path="/charte">
                <Charte />
              </Route>
              <Route path="/">
                <Home />
              </Route>
              <Route path="/home">
                <Home />
              </Route>
            </Switch>
          </ScrollToTop>


          <FooterPage handleClickOtherLink={this.handleClickOtherLink} HomehandleClick={this.HomehandleClick} />

        </div>
      </Router>




    );
  }
}


export default App;

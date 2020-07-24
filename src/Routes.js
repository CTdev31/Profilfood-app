import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import Accueil from "./components/Accueil";
import Upload_Page from "./components/Upload_Page";
import NotFound from "./containers/NotFound";



export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/Accueil" exact component={Accueil} />

      <Route path="/Upload_Page" exact component={Upload_Page} />

      <Route component={NotFound} />


    </Switch>
  );
}

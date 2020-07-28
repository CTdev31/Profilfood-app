import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import Faq from "./components/faq";
import Charte from "./components/charte";
import Cgu from "./components/cgu";

import NotFound from "./containers/NotFound";



export default function Routes() {
  return (
    <Switch>
      <Route path="/home" exact component={Home} />

      <Route path="/faq" exact component={Faq} />
      <Route path="/charte" exact component={Charte} />
      <Route path="/cgu" exact component={Cgu} />

      <Route component={NotFound} />


    </Switch>
  );
}

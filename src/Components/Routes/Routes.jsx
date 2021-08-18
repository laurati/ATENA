import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import About from "../About/About";
import Atena from "../About/Atena";
import Modal from "../Modal/Modal";
import NavBarra from '../NavBar/navbar'

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route component={About} exact path="/about" />
        <Route component={NavBarra} exact path="/navBar"/>
        <Route component={Atena} exact path="/"/>
        <Route component={Atena} exact path="/atena"/>
        <Route component={Modal} exact path="/modal"/>
        
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;

import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./Home";
import Ticket from "./Ticket";
import PickCoins from "./PickCoins";

const Main = () => (
  <main>
    <Switch>
      <Redirect exact from="/" to="/home" />
      <Route exact path="/home" component={Home} />
      <Route exact path="/ticket" component={Ticket} />
      <Route exact path="/pick_coins" component={PickCoins} />
    </Switch>
  </main>
);

export default Main;

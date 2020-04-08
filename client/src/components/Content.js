import React from "react";
import { Switch, Route } from "react-router-dom";
import Baskets from "../pages/Baskets";
import CreateBasket from "../pages/CreateBasket";
import Feed from "../pages/Feed";
import Home from "../pages/Home";
import Landing from "../pages/Landing";
import NotFound from "../pages/NotFound";


function Content() {
  return(
    <Switch>
      <Route path="/" exact={true} render={() => <Landing />} />
      <Route path="/home" render={() => <Home />} />
      <Route path="/baskets" exact={true} render={() => <Baskets />} />
      <Route path="/baskets/new" render={() => <CreateBasket />} />
      <Route path="/feed" render={() => <Feed />} />
      <Route path="*" component={NotFound} />
    </Switch>
  );
}

export default Content;

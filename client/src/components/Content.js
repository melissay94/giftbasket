import React from "react";
import { Switch, Route } from "react-router-dom";
import Baskets from "../pages/Baskets";
import CreateBasket from "../pages/CreateBasket";
import Feed from "../pages/Feed";
import Home from "../pages/Home";
import Landing from "../pages/Landing";
import NotFound from "../pages/NotFound";


function Content(props) {
  return(
    <Switch>
      <Route path="/" exact={true} render={() => <Landing isLoggedIn={props.isLoggedIn} />} />
      <Route path="/home" render={() => <Home isLoggedIn={props.isLoggedIn} />} />
      <Route path="/baskets" exact={true} render={() => <Baskets isLoggedIn={props.isLoggedIn} />} />
      <Route path="/baskets/new" render={() => <CreateBasket isLoggedIn={props.isLoggedIn} />} />
      <Route path="/feed" render={() => <Feed isLoggedIn={props.isLoggedIn} />} />
      <Route path="*" component={NotFound} />
    </Switch>
  );
}

export default Content;

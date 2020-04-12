import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Baskets from '../pages/Baskets';
import CreateBasket from '../pages/CreateBasket';
import Feed from '../pages/Feed';
import Gifts from '../pages/Gifts';
import Home from '../pages/Home';
import Landing from '../pages/Landing';
import NotFound from '../pages/NotFound';


function Content(props) {
  return (
    <Switch>
      <Route path="/" exact render={() => <Landing isLoggedIn={props.isLoggedIn} />} />
      <Route path="/home" render={() => <Home isLoggedIn={props.isLoggedIn} />} />
      <Route path="/basket/new" exact render={() => <CreateBasket isLoggedIn={props.isLoggedIn} />} />
      <Route path="/basket/:id" render={() => <Baskets isLoggedIn={props.isLoggedIn} />} />
      <Route path="/gifts" render={() => <Gifts isLoggedIn={props.isLoggedIn} />} />
      <Route path="/feed" render={() => <Feed isLoggedIn={props.isLoggedIn} />} />
      <Route path="*" component={NotFound} />
    </Switch>
  );
}

export default Content;

import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Main from './pages/Main';
import Details from './pages/Details';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Main} />
      <Route exact path="/details/:cep" component={Details} />
    </Switch>
  );
}

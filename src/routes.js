import React from 'react';
import { Switch, Route } from 'react-router-dom';
import route1 from './components/route1';
import route2 from './components/route2';
import route3 from './components/route3';

export default (
  <Switch>
    <Route exact path="/" component={ route1 } />
    <Route path="/2" component={ route2 } />
    <Route path="/3" component={ route3 } />
  </Switch>
)
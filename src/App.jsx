import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Counter from './pages/counter/Counter';
import Jotto from './pages/jotto/Jotto';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Counter} />
      <Route exact path="/jotto" component={Jotto} />
    </Switch>
  </BrowserRouter>
);

export default App;

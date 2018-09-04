import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import SamplePage from './pages/SamplePage';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={SamplePage} />
    </Switch>
  </BrowserRouter>
);

export default App;

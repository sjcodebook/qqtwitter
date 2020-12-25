import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Handler from './handler';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={Handler} />
      </Switch>
    </Router>
  );
};

export default App;

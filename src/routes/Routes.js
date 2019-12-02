import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Dashboard from '../views/dashboard/Dashboard';

function Routes() {
  return (
    
    <Switch>
      <Route exact path = '/' component = {Dashboard} />
    </Switch>

  );
}

export default Routes;
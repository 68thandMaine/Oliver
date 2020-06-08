import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Dashboard from '../views/dashboard/Dashboard';
import Accounts from '../views/accounts/Accounts';


function Routes() {
  return (
    
    <Switch>
      <Route exact path = '/' component = {Dashboard} />
			<Route exact path = '/accounts' component = {Accounts} />
    </Switch>

  );
}

export default Routes;
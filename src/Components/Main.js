import React from 'react';
import Drawers from './Drawers';
import Dashboard from './Dashboard';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

export default function Main(){
      return(
          <Router>
            <div>
            <Switch>
              <Route exact path="/">
                <Dashboard />
              </Route>
              <Route exact path="/teste">
                <Drawers />
              </Route>
            </Switch>
            </div>
          </Router>
      )
}

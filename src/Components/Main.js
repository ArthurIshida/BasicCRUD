import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Drawers from './Drawers';
import Dashboard from './Dashboard';
import Input from './Input';
import Switches from './Switches';
import Containers from './Containers';
import Bar from './Bar';

export default function Main(){
      return(
          <Router>
            <div>
            <Switch>
              <Route exact path="/">
                <Dashboard />
              </Route>
              <Route exact path="/teste">
                <Bar />
                {/*Input without event does not allow change*/}
                <Input text="" value="" changeValue=""/>
              </Route>
              <Route exact path="/teste1">
                <Drawers />
                <Switches   />
              </Route>
              <Route exact path="/teste2">
                <Bar />
                <Drawers />
              </Route>
              <Route exact path="/teste3">
                <Drawers />
                <Containers />
              </Route>
              <Route exact path="/teste4">
                <Drawers />
              </Route>
            </Switch>
            </div>
          </Router>
      )
}

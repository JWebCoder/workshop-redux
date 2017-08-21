import React from 'react';
import {Route, Switch, Redirect} from 'react-router';
// Views
import App from 'app/views/App';
import About from 'app/views/About';
import NotFound from 'app/views/NotFound';
import Login from 'app/views/Login';

const Container = props => {
  return (
    <Switch>
      <Route exact={true} path="/" component={App}/>
      <Route path="/login" component={Login}/>
      <Route path="/about" component={About}/>
      <Route path="/admin" render={() => (
        true ? (
          <Redirect to="/login"/>
        ) : (
          <Switch>
            <Route exact path="/admin" component={App}/>
            <Route component={NotFound}/>
          </Switch>
        )
        )}/>
      <Route component={NotFound}/>
    </Switch>
  );
};

export default Container;

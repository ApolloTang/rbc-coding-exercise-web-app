import _ from 'lodash';

import React from 'react';
import { Route, Switch, Link, Redirect } from 'react-router-dom';

import Login from 'app-ui/containers/login/index.js';
import Profile from 'app-ui/containers/profile/index.js';
import HeaderControl from 'app-ui/containers/header-control/index.js';
import Transfer from 'app-ui/containers/transfer/index.js';


import MainLayout from 'app-ui/presentation/main-layout/';

import SimpleNavigation from 'widgets/simple-navigation';

const Test = ({match}) => (
  <div>
    <pre><code>{JSON.stringify(_.get(match, 'params', {} ), null, 4)}</code></pre>
  </div>
)

const AuthContent = () => (
  <Switch>
    <Route exact path="/"                       component={()=>(<div>home</div>)} />
    <Route exact path="/profile"                component={Profile} />
    <Route exact path="/transfer"               component={Transfer} />
    {/* <Route exact path="/profile"                component={Transfer} /> */}
    {/* <Route exact path="/transfer"               component={Profile} /> */}
    <Route                                      component={()=><div>NotFound</div>}/>
  </Switch>
);

// const UnAuthRoutes = () => (
const AuthRoutes = () => (
    <MainLayout
      head={ <HeaderControl /> }
      body={ <AuthContent /> }
      foot={ <div>foot</div>}
    />
);


const UnAuthRoutes = () => (
// const AuthRoutes = () => (
  <Switch>
    {/* <Route exact path="/login"        component={Transfer} /> */}
    <Route exact path="/login"        component={()=>(<Login/>)} />
    <Redirect to="/login" />
    <Route                            component={()=><div>NotFound</div>}/>
  </Switch>
);
export { UnAuthRoutes, AuthRoutes, navigationDirective };

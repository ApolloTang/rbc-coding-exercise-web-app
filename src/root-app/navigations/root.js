import _ from 'lodash';

import React from 'react';
import { Route, Switch, Link, Redirect } from 'react-router-dom';

// import appConfig from 'root/appConfig';

import FontTest   from 'modules/font-test';
import Tiles      from 'modules/tiles-demo';
import Typography from 'modules/typography-test';
import Elevations from 'modules/elevation-test';
import GridDemo   from 'modules/grids-demo';
import LayoutDemo from 'modules/layout-demo';
import SimpleNavigationDemo from 'modules/simple-navigation-demo';

import MainLayout from '../main-layout/';
import MainLayoutTest from '../main-layout-test/';

import SimpleNavigation from 'widgets/simple-navigation';

const navigationDirective_auth = [
  {to:'/profile',               displayText:'Profile'},
  {to:'/transfer',              displayText:'Transfer'},
  {to:'/logout',                displayText:'Logout'},
];

const navigationDirectiveStyle = [
  {to:'/font-test',               displayText:'fonts'},
  {to:'/typography',              displayText:'typography'},
  {to:'/tiles-demo',              displayText:'Tiles'},
  {to:'/elevation-test',          displayText:'elevations'},
  {to:'/grid-demo',               displayText:'grids'},
  {to:'/layout-demo',             displayText:'layout'},
];

const Test = ({match}) => (
  <div>
    <pre><code>{JSON.stringify(_.get(match, 'params', {} ), null, 4)}</code></pre>
  </div>
)


const AuthContent = () => (
  <Switch>
    <Route exact path="/"                       component={()=>(<div>home</div>)} />
    <Route exact path="/font-test"              component={FontTest} />
    <Route exact path="/typography"             component={Typography} />
    <Route exact path="/tiles-demo"             component={Tiles} />
    <Route exact path="/elevation-test"         component={Elevations} />
    <Route exact path="/grid-demo"              component={GridDemo} />
    <Route exact path="/layout-demo"            component={LayoutDemo} />
    <Route                                      component={()=><div>NotFound</div>}/>
  </Switch>
);

const AuthRoutes = () => (
  <div>
    <MainLayout
      head={ <SimpleNavigation navigations={navigationDirective_auth} /> }
      body={ <AuthContent /> }
      foot={ <div>foot</div>}
    />
    <MainLayoutTest
      Navigation={ <SimpleNavigation navigations={navigationDirectiveStyle} /> }
      Routes={ <AuthContent /> }
    />
  </div>
);


const UnAuthRoutes = () => (
  <Switch>
    <Route                                      component={()=><div>NotFound</div>}/>
    {/* <Route exact path="/login"        component={()=>(<Login/>)} /> */}
    {/* <Redirect to="/login" /> */}
  </Switch>
);
export { UnAuthRoutes, AuthRoutes, navigationDirective };

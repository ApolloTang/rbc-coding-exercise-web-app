import _ from 'lodash';

import React from 'react';
import { Route, Switch, Link, Redirect } from 'react-router-dom';

// import appConfig from 'root/appConfig';

// import FontTest   from 'modules/font-test';
// import Tiles      from 'modules/tiles-demo';
// import Typography from 'modules/typography-test';
// import Elevations from 'modules/elevation-test';
// import GridDemo   from 'modules/grids-demo';
// import LayoutDemo from 'modules/layout-demo';
// import SimpleNavigationDemo from 'modules/simple-navigation-demo';


import Login from 'app-ui/containers/login/index.js';
import Profile from 'app-ui/containers/profile/index.js';
import HeaderControl from 'app-ui/containers/header-control/index.js';
import Transfer from 'app-ui/containers/transfer/index.js';


import MainLayout from 'app-ui/presentation/main-layout/';
// import MainLayoutTest from '../main-layout-test/';

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
    {/* <Route exact path="/font-test"              component={FontTest} /> */}
    {/* <Route exact path="/typography"             component={Typography} /> */}
    {/* <Route exact path="/tiles-demo"             component={Tiles} /> */}
    {/* <Route exact path="/elevation-test"         component={Elevations} /> */}
    {/* <Route exact path="/grid-demo"              component={GridDemo} /> */}
    {/* <Route exact path="/layout-demo"            component={LayoutDemo} /> */}
    {/*  */}

    <Route exact path="/profile"                component={Profile} />
    <Route exact path="/transfer"               component={Transfer} />

    {/* <Route exact path="/profile"                component={Transfer} /> */}
    {/* <Route exact path="/transfer"               component={Profile} /> */}
    <Route                                      component={()=><div>NotFound</div>}/>
  </Switch>
);

const UnAuthRoutes = () => (
// const AuthRoutes = () => (
  <div>
    <MainLayout
      head={ <HeaderControl /> }
      /* head={ <SimpleNavigation navigations={navigationDirective_auth} /> } */
      body={ <AuthContent /> }
      foot={ <div>foot</div>}
    />
    {/* <MainLayoutTest */}
    {/*   Navigation={ <SimpleNavigation navigations={navigationDirectiveStyle} /> } */}
    {/*   Routes={ <AuthContent /> } */}
    {/* /> */}
  </div>
);


// const UnAuthRoutes = () => (
const AuthRoutes = () => (
  <Switch>
    {/* <Route exact path="/login"        component={Transfer} /> */}
    <Route exact path="/login"        component={()=>(<Login/>)} />
    <Redirect to="/login" />
    <Route                            component={()=><div>NotFound</div>}/>
  </Switch>
);
export { UnAuthRoutes, AuthRoutes, navigationDirective };

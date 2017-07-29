import React from 'react';
import {Route, Switch, Link, Redirect } from 'react-router-dom';

import MainLayout from './main-layout/';
import SimpleNavigation from 'widgets/simple-navigation';
import Routes from './routes';
import {navigationDirective} from './routes';

// import imgTest from 'common/styles/images/79.jpg';

import styles_less from './styles.less';
import styles_scss from './styles.scss';
class RootApp extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div id="root-app" className="theme-a">
        {/* <img   src={imgTest}/> */}
        <img className="test" />
        <MainLayout
          Navigation={ <SimpleNavigation navigations={navigationDirective} /> }
          Routes={ <Routes />}
        />
      </div>
    );
  }
};

export default RootApp;


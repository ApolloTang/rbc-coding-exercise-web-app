import React from 'react';
import { func, object, string } from 'prop-types';

import { connect } from 'react-redux';

import { push } from 'connected-react-router';


import MainLayoutTest from './main-layout-test/';
import MainLayout from './main-layout/';

import {UnAuthRoutes, AuthRoutes, navigationDirective} from './navigations/root';
import SimpleNavigation from 'widgets/simple-navigation';


// import imgTest from 'common/styles/images/79.jpg';
import styles_less from './styles.less';
import styles_scss from './styles.scss';
class RootApp extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidUpdate(prevProps, prevState) {
    // const isLoggedIn_prev = prevProps.isLoggedIn;
    // const isLoggedIn_next = this.props.isLoggedIn;
    //
    // if (!isLoggedIn_prev && isLoggedIn_next ) {
    //   // Authenticate success navigate to Dashboard
    //   this.props.dispatch(push('Dashboard'));
    // }
  }

  render() {
    const isLoggedIn = false;

    let DisplayRoutesComponent = UnAuthRoutes;
    if (isLoggedIn) {
      DisplayRoutesComponent = AuthRoutes;
    }

    return (
      <div id="root-app" className="theme-a">
        <MainLayout
          header={ <div>header</div> }
          body={ <div>body</div> }
          foot={ <div>foot</div>}
        />
        {/* <img   src={imgTest}/> */}
        <img className="test" />
        <MainLayoutTest
          Navigation={ <SimpleNavigation navigations={navigationDirective} /> }
          Routes={ <DisplayRoutesComponent /> }
        />
      </div>
    );
  }
};

export default RootApp;


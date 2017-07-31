import React from 'react';
import { func, object, string } from 'prop-types';

import { connect } from 'react-redux';

import { push } from 'connected-react-router';


import {UnAuthRoutes, AuthRoutes} from './navigations/root';



//import imgTest from 'common/styles/images/79.jpg'
// import styles_less from './styles.less';
import styles_scss from './styles.scss';


const mapStoreToProps = store => {
  const isLoggedIn = _.get(store, `appUI.login.isLoggedIn`, false );
  return { isLoggedIn, store }
};
const mapDispatchToProps = dispatch => ({
  dispatch,
});


@connect(mapStoreToProps, mapDispatchToProps)
class RootApp extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidUpdate(prevProps, prevState) {
    const isLoggedIn_prev = prevProps.isLoggedIn;
    const isLoggedIn_next = this.props.isLoggedIn;

    if (!isLoggedIn_prev && isLoggedIn_next ) {
      // Authenticate success navigate to Dashboard
      this.props.dispatch(push('profile'));
    }
  }

  render() {
    const isLoggedIn = this.props.isLoggedIn;

    let DisplayRoutesComponent = UnAuthRoutes;
    if (isLoggedIn) {
      DisplayRoutesComponent = AuthRoutes;
    }

    return (
      <div id="root-app" className="theme-a">
        <DisplayRoutesComponent />
      </div>
    );
  }
};

export default RootApp;


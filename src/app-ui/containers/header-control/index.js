import React from 'react';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import { BrowserRouter, NavLink, withRouter } from 'react-router-dom';

import {
  string,
  bool,
  func,
  object
} from 'prop-types';

import styles from './styles.scss';

import selector from 'app-ui/containers/profile/selector';
const {mapStoreToProps, mapDispatchToProps} = selector;

class Screen_profile extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.dispatch_init();
    this.props.dispatch_fetchUserById(this.props.userId);
  }

  render() {
    if (this.props.isLoading) {
      return(
        <div>
          <i className="fa fa-circle-o-notch fa-spin fa-3x fa-fw"></i>
        </div>
      )
    };

    return (
      <div className={`header-control ${styles['module-style']}`}>
        <div className="left-group">
          <div className="icon">
            <i className="fa fa-credit-card fa-1x" aria-hidden="true"></i>
          </div>
          <div className="text" >
            <span>future banking</span>
          </div>
        </div>

        <div className="right-group">
          <div className="nav-button">
            <NavLink exact to={'/profile'} activeClassName="is-active" >
              <div className="content">
                <div className="icon">
                  <img src={_.get(this.props, `userProps.photo_url`, '')}/>
                </div>
                <div className="text" >
                  <span>{_.get(this.props, `userProps.name`, '')}</span>
                </div>
              </div>
            </NavLink>
          </div>
          <div className="nav-button">
            <NavLink exact to={'/transfer'} activeClassName="is-active" >
              <div className="content">
                <div className="text" >
                  <span>Transfer</span>
                </div>
              </div>

            </NavLink>
          </div>
          <div className="nav-button">
            <NavLink exact to={'/logout'} activeClassName="is-active" >
              <div className="content">
                <div className="text" >
                  <span>Sign out</span>
                </div>
                <div className="icon">
                  <i className="fa fa-sign-out" aria-hidden="true" ></i>
                </div>
              </div>
            </NavLink>
          </div>
        </div>

      </div>
    );
  }
}
export default withRouter(connect(mapStoreToProps, mapDispatchToProps)(Screen_profile))

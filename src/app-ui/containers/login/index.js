import React from 'react';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';

import {
  string,
  bool,
  func,
  object
} from 'prop-types';


import selector from './selector';
const {mapStoreToProps, mapDispatchToProps} = selector;


import styles from './styles.scss';

@connect(mapStoreToProps, mapDispatchToProps)
class Screen_Login extends React.Component {
  constructor(props) {
    super(props);
  }

  handle_login = () => {
    this.props.dispatch_createSession(email, password);
  }

  render() {
    return (
      <div className={`login ${styles['module-style']}`} >
        <fieldset>
          <div className="wrap-legend">
            <legend>Please log in</legend>
          </div>

          <div className="group">
            <div className="form-row" data-fn="email" >
              <div className="label-wrap left-col">
                <label id="email_label" htmlFor="email">
                  Email:
                </label>
              </div>
              <div className="input-wrap last-col">
                <input
                  onChange={ ()=>{} }
                  type="text"
                  id="email"
                  aria-labelledby="email_label"
                  defaultValue={''}
                />
              </div>
            </div>

            <div className="form-row" data-fn="password" >
              <div className="label-wrap left-col">
                <label id="password_label" htmlFor="password">
                  Password:
                </label>
              </div>
              <div className="input-wrap last-col">
                <input
                  onChange={ ()=>{} }
                  type="password"
                  id="password"
                  aria-labelledby="password_label"
                  defaultValue={''}
                />
              </div>
            </div>
          </div>

        </fieldset>

        <div className="wrap-button">
          <button className="send-button" onClick={this.handle_login} > log in </button>
        </div>
        {
          (this.props.isLoading) ?
            <div className='message'>
              <div className='wrap-spinner'>
                <i className="fa fa-circle-o-notch fa-spin fa-3x fa-fw"></i>
              </div>
            </div> : null
        }
      </div>
    );
  }
}

export default Screen_Login;

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



@connect(mapStoreToProps, mapDispatchToProps)
class Screen_Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };

    this.inputs = {};
  }

  handle_emailChange = (email) => {
    this.setState({ email });
  }

  handle_passwordChange = (password) => {
    this.setState({ password });
  }

  handle_login = () => {
    // FOR DEV
    let email = ''; //this.state.email;
    let password = ''; //this.state.password;

    email = 'test_0@test.com';
    password = 'password';
    this.props.dispatch_createSession(email, password);
  }

  render() {
    return (
      <div>
        <div className="group">
          <div className="form-row" data-fn="email" >
            <div className="label-wrap left-col">
              <label id="email_label" htmlFor="email">
                email:
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
        <button onClick={this.handle_login} > log in </button>
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

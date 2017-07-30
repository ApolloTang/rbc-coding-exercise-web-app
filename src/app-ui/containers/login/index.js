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

    if (this.props.isLoading) {
      return(
        <div>
          <i className="fa fa-circle-o-notch fa-spin fa-3x fa-fw"></i>
        </div>
      )
    };

    return (
      <div>
        loggin in screen
        <button onClick={this.handle_login} > log in </button>
      </div>
    );
  }
}

export default Screen_Login;

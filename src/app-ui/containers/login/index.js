import React from 'react';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';

import {
  string,
  bool,
  func,
  object
} from 'prop-types';

// import {
//   mapStoreToProps s mapStoreToProps,
//   login_mapDispatchToProps as mapDispatchToProps,
// } from './selector';

import selector from './selector';
const {mapStoreToProps, mapDispatchToProps} = selector;

console.log('xxxxuyyyyyy: ', selector);

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
    // FOR DEV ONLY
    let email = ''; //this.state.email;
    let password = ''; //this.state.password;

    // if (__DEV__) {
      email = 'test_0@test.com';
      password = 'password';
    // }

    this.props.dispatch_createSession(email, password, 'extra');
  }

  render() {
    console.log('xxxxx:', this.props);
    return (
      <div>
        loggin in screen
        <button onClick={this.handle_login} > log in </button>
      </div>

    );
  }
}

// Screen_Login.propTypes = {
//   loginError: string,
//   isLoading: bool,
//   isLoggedIn: bool,
//   dispatch_createSession: func.isRequired,
// };
//
// Screen_Login.defaultProps = {
//   loginError: '',
//   isLoading: false,
//   isLoggedIn: false,
// };

// export default connect(mapStoreToProps, mapDispatchToProps)(Screen_Login);
export default Screen_Login;

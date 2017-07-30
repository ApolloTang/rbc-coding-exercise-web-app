import _ from 'lodash';

import AN from 'root-infarstructure/action-names';
import API_authentication from 'services/sessions/authentication/api';

const Action_login = {
  init() {
    return (dispatch, getState) => {
      dispatch({
        type: c[`login__init`],
      });
    };
  },
  createSession(email, password) {
    return (dispatch, getState) => {
      dispatch({
        type: AN[`login__createSession_begin`],
      });
      return API_authentication.createSession(email, password).then(
        (session) => {
          if (session.httpError) {
            if (session.httpError.message) {
              dispatch({
                type: AN[`login__createSession_fail`],
                error: session.httpError.message,
              });
            } else {
              dispatch({
                type: AN[`login__createSession_fail`],
                error: 'Username and password combination incorrect',
              });
            }
          } else {
            const isLoggedIn = !!_.get(getState(), `sessions.authentication.token`, false );
            dispatch({
              type: AN[`login__createSession_success`],
              payload: {isLoggedIn: isLoggedIn},
            });
          }
        },
      );
    };
  },
  destroySession() {
    return (dispatch, getState) => {
      dispatch({ type: AN[`login__destroySession`] });
      dispatch({ type: AN[`sessions_authenticate_destroySession`] });
    };
  },
};

export default Action_login;

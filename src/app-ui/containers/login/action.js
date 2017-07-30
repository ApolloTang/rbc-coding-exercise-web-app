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
  createSession(email, password, extra) {
    return (dispatch, getState) => {
      dispatch({
        type: AN[`login__createSession_begin`],
      });
      return API_authentication.createSession(email, password, extra).then(
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
            dispatch({
              type: AN[`login__createSession_success`],
              payload: session,
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

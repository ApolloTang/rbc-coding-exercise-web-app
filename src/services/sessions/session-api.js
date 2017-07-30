import _ from 'lodash';
import { createHttp } from 'qmcl/src/util/rest';
import c from 'qmcl/src/root/actionNames';

import appConfig from 'qmcl/src/appConfig';

const $DEV$ = (appConfig.BUILD === 'DEV');

const apiUrl = _.get(appConfig, `apiUrl`, void 0);

const api_authentication = (dispatch, getState) => ({
  createSession(email, password, extra) {
    const payload = {
      email,
      password,
    };

    if ($DEV$) {
      console.log('xxxxxx in api_authentication.createSession', payload );
    }
    return createHttp
      // .post(`${apiUrl}/sessions/create`, payload) // for testing
      .post(getState)(`${apiUrl}/auth/session`, payload) // for testing
      .then(
        (session) => {
          if ($DEV$) {
            console.log('session: ', session);
          }
          const token = _.get(session, `token`, void 0);
          if ($DEV$) {
            console.log('token: ', token);
          }

          // @TODO calculate when user should be logged
          const token_expiry = _.get(session, `token_expiry`, void 0);
          const isLoggedIn = !!token;

          const user_loggedIn = _.get(session, `user`, void 0);

          dispatch({
            type: c[`sessions_authenticate_createSession_success`],
            payload: { token, user_loggedIn, token_expiry, isLoggedIn },
          });
          return session;
        },
      );
  },
});


export default api_authentication;

import _ from 'lodash';

import AN from 'root-infarstructure/action-names';
import API_user from 'services/sessions/user/api';

const Action_user = {
  init() {
    return (dispatch, getState) => {
      dispatch({
        type: AN[`user__init`],
      });
    };
  },
  getUserById(userId) {
    return (dispatch, getState) => {
      dispatch({
        type: AN[`user__fetch_begin`],
        payload: {userId},
      });

      return API_user.getOne(userId).then(
        (user) => {
          if (user.httpError) {
              dispatch({
                type: AN[`user__createSession_fail`],
                error: session.httpError.message,
              });
          } else {
            dispatch({
              type: AN[`user__fetch_success`],
              payload: {user},
            });
          }
        },
      );

    };
  }
};

export default Action_user;

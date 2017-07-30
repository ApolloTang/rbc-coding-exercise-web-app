import _ from 'lodash';

import c from 'qmcl/src/root/actionNames';

import { array_to_IndexObj } from 'qmcl/src/util/helper';

const initialState = {
  user_loggedIn: void 0,
};

const user_loggedIn = (state = initialState, action) => {
  switch (action.type) {
    case c[`sessions_authenticate_createSession_success`] : {
      const payload = action.payload;
      const user_loggedIn = _.get(action, `payload.user_loggedIn`, void 0);

      const state_prev = state;
      const state_next = {
        ...user_loggedIn,
      };
      return state_next;
    }
    default: {
      return state;
    }
  }
};

export default user_loggedIn;

import _ from 'lodash';

import AN from 'root-infarstructure/action-names';

const initialState = {
  token: void 0
};

const authentication = (state = initialState, action) => {
  switch (action.type) {
    case AN[`sessions_authenticate_createSession_success`] : {
      const payload = action.payload;
      const token = _.get(action, `payload.token`, void 0);

      const state_prev = state;
      const state_next = {
        token
      };
      return state_next;
    }
    case AN[`sessions_authenticate_destroySession`] : {
      const state_prev = state;
      const state_next = {
        ...initialState,
      };
      return state_next;
    }
    default: {
      return state;
    }
  }
};

export default authentication;

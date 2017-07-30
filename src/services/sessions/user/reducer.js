import _ from 'lodash';

import AN from 'root-infarstructure/action-names';

const initialState = {
  userId: void 0,
  userProps: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case AN[`sessions_authenticate_createSession_success`] : {
      const userId = _.get(action, `payload.userId`, void 0);

      const state_prev = state;
      const state_next = {
        userId
      };
      return state_next;
    }
    case AN[`sessions_user_update`] : {
      const userProps = _.get(action, `payload.userProps`, void 0);
      const state_prev = state;
      const state_next = {
        ...state_prev,
        userProps
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

export default reducer;

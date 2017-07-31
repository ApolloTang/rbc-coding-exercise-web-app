import _ from 'lodash';
import AN from 'root-infarstructure/action-names';

const initialState = {
  isLoading: false,
};

const reducer_login = (state = { ...initialState }, action) => {
  switch (action.type) {
    case AN[`user__fetch_begin`]: {
      const state_prev = { ...state };
      const state_next = { ...state_prev, isLoading: true};
      return state_next;
    }
    case AN[`user__fetch_success`]: {
      const isLoggedIn = _.get(action, `payload.isLoggedIn`, false);
      const state_prev = { ...state };
      const state_next = { ...state_prev, isLoading: false };
      return state_next;
    }
    case AN[`user__createSession_fail`]: {
      const state_prev = { ...state };
      const state_next = { ...state_prev, isLoading: false };
      return state_next;
    }
    default: {
      return state;
    }
  }
};

export default reducer_login;

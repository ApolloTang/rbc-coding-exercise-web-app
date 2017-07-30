import AN from 'root-infarstructure/action-names';

const initialState = {
  isLoading: false,
  loginError: '',
};

const reducer_login = (state = { ...initialState }, action) => {
  switch (action.type) {
    case AN[`login__createSession_begin`]: {
      const state_prev = { ...state };
      const state_next = { ...state_prev, isLoading: true, loginError: '' };
      return state_next;
    }
    case AN[`login__createSession_success`]: {
      const state_prev = { ...state };
      const state_next = { ...state_prev, isLoading: false };
      return state_next;
    }
    case AN[`login__createSession_fail`]: {
      const state_prev = { ...state };
      const state_next = { ...state_prev, isLoading: false, loginError: action.error };
      return state_next;
    }
    default: {
      return state;
    }
  }
};

export default reducer_login;

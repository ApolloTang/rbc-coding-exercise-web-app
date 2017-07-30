import { combineReducers } from 'redux';

import authentication from './authentication/reducer';
// import user_loggedIn from './user_loggedIn';

const session = combineReducers({
  authentication,
  // user_loggedIn,
});


export default session;


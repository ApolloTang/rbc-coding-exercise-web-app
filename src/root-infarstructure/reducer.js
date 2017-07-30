import {combineReducers} from 'redux';


import login from  'app-ui/containers/login/reducer';
import transfer from  'app-ui/containers/transfer/reducer';
const appUI = combineReducers({
  login,
  transfer
});


import authentication from 'services/sessions/authentication/reducer';
import user from 'services/sessions/user/reducer';
const sessions = combineReducers({
  authentication,
  user
});

const rootReducer = combineReducers({
  appUI,
  sessions
})

export default rootReducer;

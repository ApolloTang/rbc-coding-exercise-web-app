import {combineReducers} from 'redux';


import login from  'app-ui/containers/login/reducer';
const appUI = combineReducers({
  login
});


import authentication from 'services/sessions/authentication/reducer';
const sessions = combineReducers({
  authentication
});

const rootReducer = combineReducers({
  appUI,
  sessions
})

export default rootReducer;

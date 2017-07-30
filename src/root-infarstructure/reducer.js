import {combineReducers} from 'redux';

import login from  'app-ui/containers/login/reducer';
import sessions from 'services/sessions/combine-reducer';

const rootReducer = combineReducers({
  login,
  sessions
})

export default rootReducer;

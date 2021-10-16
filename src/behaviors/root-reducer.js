import { combineReducers } from 'redux';

import user from './user-agregador/user-reducer';
import auth from './auth-agregador/auth-reducer';

export default combineReducers({
  user,
  auth,
});

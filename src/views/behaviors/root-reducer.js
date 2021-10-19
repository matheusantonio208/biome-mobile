import { combineReducers } from 'redux';

import auth from './auth-agregador/auth-reducer.js';
import user from './user-agregador/user-reducer.js';

export default combineReducers({
  user,
  auth,
});

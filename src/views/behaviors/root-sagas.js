import { all } from 'redux-saga/effects';

import authSagas from './auth-agregador/auth-sagas.js';
import userSagas from './user-agregador/user-sagas.js';

export default function* rootSaga() {
  return yield all([userSagas, authSagas]);
}

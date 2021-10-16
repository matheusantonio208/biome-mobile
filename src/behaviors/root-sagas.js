import { all } from 'redux-saga/effects';

import userSagas from './user-agregador/user-sagas';
import authSagas from './auth-agregador/auth-sagas';

export default function* rootSaga() {
  return yield all([userSagas, authSagas]);
}

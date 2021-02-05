import {LoginForm} from '../components/LoginForm/saga';
import {all} from 'redux-saga/effects';
export function* rootSaga() {
  yield all([...LoginForm]);
}

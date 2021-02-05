import {navigationRef} from '@navigation';
import {Alert} from 'react-native';
import {call, takeLeading} from 'redux-saga/effects';
import request from 'utils/api';
import {LOGIN_REQUEST} from './action-types';

export function* handleLogin(action: any) {
  const {email, password} = action.payload;
  try {
    yield call(request, '/functions/login', {
      username: email,
      password: password,
    });
    navigationRef.current?.navigate('Signup');
  } catch (error) {
    Alert.alert(error.response.data.error);
  }
}
export const LoginForm = [takeLeading(LOGIN_REQUEST, handleLogin)];

import {LOGIN_REQUEST} from './action-types';

export function loginRequest(payload: any) {
  return {type: LOGIN_REQUEST, payload};
}

import produce from 'immer';
import {LOGIN_REQUEST} from './action-types';

const INITIAL_STATE = {
  loading: false,
};

const reducer = produce((state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      state.loading = true;
      return state;
    default:
      return state;
  }
});
export default reducer;

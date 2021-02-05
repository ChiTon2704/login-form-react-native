import rootReducer from 'reducers/rootReducer';
import AsyncStorage from '@react-native-community/async-storage';

import {applyMiddleware, createStore} from 'redux';
import {persistReducer, persistStore} from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import {middleware as thunkMiddleware} from 'redux-saga-thunk';
import {rootSaga} from '../saga/rootSaga';
const sagaMiddleware = createSagaMiddleware();
const persistConfig = {
  key: 'abc',
  storage: AsyncStorage,
  whiteList: [],
  transforms: '',
};
const middlewares = [];
middlewares.push(sagaMiddleware);
if (__DEV__) {
  const createDebugger = require('redux-flipper').default;
  middlewares.push(createDebugger());
}
const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(
  persistedReducer,
  applyMiddleware(thunkMiddleware, ...middlewares),
);
sagaMiddleware.run(rootSaga);
export const persistor = persistStore(store);
export default store;

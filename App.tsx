/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {SafeAreaView} from 'react-native';
import MainContainer from '@navigation';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';
import store from './src/store';
declare const global: {HermesInternal: null | {}};

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <MainContainer />
      </SafeAreaProvider>
    </Provider>
  );
};
export default App;

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import { NavigationContainer } from '@react-navigation/native';
import { NativeBaseProvider } from 'native-base';
import React from 'react';

import GlobalContext from './src/components/globalContext';
import MainStack from './src/Navigation/MainStack';

const App = () => {

  return (
    <GlobalContext>
      <NativeBaseProvider>
        <NavigationContainer>
          <MainStack />
        </NavigationContainer>
      </NativeBaseProvider>
    </GlobalContext>
  );

};

export default App;

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';

import RootNavigator from './navigators/RootNavigator';

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <RootNavigator />
      </SafeAreaProvider>
    </NavigationContainer>
  );
}

export default App;

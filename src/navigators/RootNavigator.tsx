import Logincreen from '../screens/LoginScreen';

import modalNavigationGroup from './ModalNavigator';
import TabNavigator from './TabNavigator';

import Stack from './RootStack';

function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="Login"
        component={Logincreen}
        initialParams={{
          next: 'App',
        }}
      />

      <Stack.Screen name="App" component={TabNavigator} />

      {modalNavigationGroup()}
    </Stack.Navigator>
  );
}

export default RootNavigator;

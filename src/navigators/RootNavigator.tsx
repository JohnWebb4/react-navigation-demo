import {createStackNavigator} from '@react-navigation/stack';

import Logincreen from '../screens/LoginScreen';
import SupportScreen from '../screens/SupportScreen';
import {RootParams} from '../types/navigation';
import TabNavigator from './TabNavigator';

const Stack = createStackNavigator<RootParams>();

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

      <Stack.Group screenOptions={{presentation: 'modal', headerShown: true}}>
        <Stack.Screen name="Support" component={SupportScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

export default RootNavigator;

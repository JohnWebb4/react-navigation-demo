import {createStackNavigator} from '@react-navigation/stack';

import Logincreen from '../screens/LoginScreen';
import SupportScreen from '../screens/SupportScreen';
import {RootParams} from '../types/navigation';

const Stack = createStackNavigator<RootParams>();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Logincreen}
        initialParams={{
          next: 'Support',
        }}
      />

      <Stack.Group screenOptions={{presentation: 'modal'}}>
        <Stack.Screen name="Support" component={SupportScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

export default RootNavigator;

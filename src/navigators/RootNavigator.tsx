import {createStackNavigator} from '@react-navigation/stack';

import StackScreen from '../screens/StackScreen';
import ModalScreen from '../screens/ModalScreen';
import {RootParams} from '../types/navigation';

const Stack = createStackNavigator<RootParams>();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Stack"
        component={StackScreen}
        initialParams={{
          next: 'Modal',
        }}
      />

      <Stack.Group screenOptions={{presentation: 'modal'}}>
        <Stack.Screen name="Modal" component={ModalScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

export default RootNavigator;

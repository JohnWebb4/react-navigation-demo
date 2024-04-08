import {createStackNavigator} from '@react-navigation/stack';
import Page from '../components/Page';
import {RootParams} from '../types/navigation';

const Stack = createStackNavigator<RootParams>();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Hello" component={Page} />
    </Stack.Navigator>
  );
}

export default RootNavigator;

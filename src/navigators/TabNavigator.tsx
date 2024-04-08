import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {AppParams} from '../types/navigation';
import HomeScreen from '../screens/HomeScreen';
import DevicesScreen from '../screens/DevicesScreen';

const BottomTab = createBottomTabNavigator<AppParams>();

function TabNavigator() {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        initialParams={{
          next: undefined,
          showConfetti: false,
        }}
      />

      <BottomTab.Screen
        name="Devices"
        component={DevicesScreen}
        initialParams={{
          next: 'Support',
        }}
      />
    </BottomTab.Navigator>
  );
}

export default TabNavigator;

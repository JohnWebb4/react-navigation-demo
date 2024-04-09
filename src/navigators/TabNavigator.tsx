import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {AppParams} from '../types/navigation';
import HomeScreen from '../screens/HomeScreen';
import DevicesScreen from '../screens/DevicesScreen';

const BottomTab = createBottomTabNavigator<AppParams>();

function TabNavigator() {
  return null;
}

export default TabNavigator;

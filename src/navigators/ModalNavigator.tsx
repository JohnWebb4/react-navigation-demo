import {Button} from 'react-native';
import {NavigationProp, useNavigation} from '@react-navigation/native';

import SupportScreen from '../screens/SupportScreen';
import {RootParams} from '../types/navigation';

import Stack from './RootStack';

function modalNavigationGroup() {
  return (
    <Stack.Group screenOptions={{presentation: 'modal', headerShown: true}}>
      <Stack.Screen
        name="Support"
        component={SupportScreen}
        options={{
          headerRight: () => {
            const {navigate} = useNavigation<NavigationProp<RootParams>>();

            return (
              <Button title="Static Home" onPress={() => navigate('Home')} />
            );
          },
        }}
      />
    </Stack.Group>
  );
}

export default modalNavigationGroup;

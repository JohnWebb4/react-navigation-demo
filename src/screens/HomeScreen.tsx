import {Button} from 'react-native';
import ConfettiCannon from 'react-native-confetti-cannon';
import {
  NavigationProp,
  RouteProp,
  useNavigation,
  useRoute,
} from '@react-navigation/native';

import Header from '../components/Header';
import Page from '../components/Page';
import {AppParams} from '../types/navigation';

function HomeScreen() {
  const {name, params} = useRoute<RouteProp<AppParams, 'Home'>>();

  return (
    <Page>
      <Header>{name}</Header>

      {params?.showConfetti ? (
        <ConfettiCannon count={200} origin={{x: -10, y: 0}} />
      ) : undefined}
    </Page>
  );
}

export default HomeScreen;

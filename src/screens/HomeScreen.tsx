import ConfettiCannon from 'react-native-confetti-cannon';
import {RouteProp, useRoute} from '@react-navigation/native';
import Page from '../components/Page';
import {AppParams} from '../types/navigation';

function HomeScreen() {
  const {name, params} = useRoute<RouteProp<AppParams, 'Home'>>();

  return (
    <Page name={name} next={params?.next}>
      {params?.showConfetti ? (
        <ConfettiCannon count={200} origin={{x: -10, y: 0}} />
      ) : undefined}
    </Page>
  );
}

export default HomeScreen;

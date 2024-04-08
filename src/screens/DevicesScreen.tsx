import {Button} from 'react-native';
import {
  NavigationProp,
  RouteProp,
  useNavigation,
  useRoute,
} from '@react-navigation/native';

import Page from '../components/Page';
import {AppParams} from '../types/navigation';
import Header from '../components/Header';

function DevicesScreen() {
  const {navigate} = useNavigation<NavigationProp<AppParams>>();
  const {name, params} = useRoute<RouteProp<AppParams, 'Devices'>>();

  function onNext() {
    if (params?.next) {
      navigate(params?.next);
    }
  }

  return (
    <Page>
      <Header>{name}</Header>

      {params.next ? (
        <Button title={`To ${params.next}`} onPress={onNext} />
      ) : undefined}
    </Page>
  );
}

export default DevicesScreen;

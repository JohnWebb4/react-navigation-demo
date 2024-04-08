import {Button} from 'react-native';
import {
  NavigationProp,
  RouteProp,
  useNavigation,
  useRoute,
} from '@react-navigation/native';

import Header from '../components/Header';
import Page from '../components/Page';
import {RootParams} from '../types/navigation';

function SupportScreen() {
  const {navigate} = useNavigation<NavigationProp<RootParams>>();
  const {name, params} = useRoute<RouteProp<RootParams, 'Support'>>();

  function onNext() {
    if (params?.next) {
      navigate(params?.next);
    }
  }

  function onHome() {
    navigate('Home', {
      showConfetti: true,
    });
  }

  return (
    <Page>
      <Header>{name}</Header>

      {params?.next ? (
        <Button title={`To ${params.next}`} onPress={onNext} />
      ) : undefined}

      <Button title="Go Home" onPress={onHome} />
    </Page>
  );
}

export default SupportScreen;

import {Button} from 'react-native';
import {
  NavigationProp,
  RouteProp,
  useNavigation,
  useRoute,
} from '@react-navigation/native';

import {RootParams} from '../types/navigation';
import Page from '../components/Page';
import {useCallback} from 'react';

function SupportScreen() {
  const {navigate} = useNavigation<NavigationProp<RootParams>>();
  const {name, params} = useRoute<RouteProp<RootParams, 'Support'>>();

  const onHome = useCallback(() => {
    navigate('Home', {
      showConfetti: true,
    });
  }, [navigate]);

  return (
    <Page name={name} next={params?.next}>
      <Button title="Go Home" onPress={onHome} />
    </Page>
  );
}

export default SupportScreen;

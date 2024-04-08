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

function Logincreen() {
  const {navigate} = useNavigation<NavigationProp<RootParams>>();
  const {name, params} = useRoute<RouteProp<RootParams, 'Login'>>();

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

export default Logincreen;

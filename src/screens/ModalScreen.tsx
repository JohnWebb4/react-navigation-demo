import {RouteProp, useRoute} from '@react-navigation/native';

import {RootParams} from '../types/navigation';
import Page from '../components/Page';

function ModalScreen() {
  const {name, params} = useRoute<RouteProp<RootParams, 'Modal'>>();

  return <Page name={name} next={params?.next} />;
}

export default ModalScreen;

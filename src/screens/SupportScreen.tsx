import {RouteProp, useRoute} from '@react-navigation/native';

import {RootParams} from '../types/navigation';
import Page from '../components/Page';

function SupportScreen() {
  const {name, params} = useRoute<RouteProp<RootParams, 'Support'>>();

  return <Page name={name} next={params?.next} />;
}

export default SupportScreen;

import {RouteProp, useRoute} from '@react-navigation/native';

import Page from '../components/Page';
import {RootParams} from '../types/navigation';

function StackScreen() {
  const {name, params} = useRoute<RouteProp<RootParams, 'Stack'>>();

  return <Page name={name} next={params?.next} />;
}

export default StackScreen;

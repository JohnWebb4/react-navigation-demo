import {RouteProp, useRoute} from '@react-navigation/native';

import Page from '../components/Page';
import {RootParams} from '../types/navigation';

function Logincreen() {
  const {name, params} = useRoute<RouteProp<RootParams, 'Login'>>();

  return <Page name={name} next={params?.next} />;
}

export default Logincreen;

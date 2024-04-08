import {RouteProp, useRoute} from '@react-navigation/native';
import Page from '../components/Page';
import {AppParams} from '../types/navigation';

function DevicesScreen() {
  const {name, params} = useRoute<RouteProp<AppParams, 'Devices'>>();

  return <Page name={name} next={params?.next} />;
}

export default DevicesScreen;

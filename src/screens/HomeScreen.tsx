import {RouteProp, useRoute} from '@react-navigation/native';
import Page from '../components/Page';
import {AppParams} from '../types/navigation';

function HomeScreen() {
  const {name, params} = useRoute<RouteProp<AppParams, 'Home'>>();

  return <Page name={name} next={params?.next} />;
}

export default HomeScreen;

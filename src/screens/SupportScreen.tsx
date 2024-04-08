import {useEffect, useState} from 'react';
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
  const {navigate, setOptions} = useNavigation<NavigationProp<RootParams>>();
  const {name} = useRoute<RouteProp<RootParams, 'Support'>>();
  const [count, setCount] = useState(0);

  useEffect(() => {
    function onHome() {
      navigate('Home', {
        showConfetti: true,
      });
    }
    setOptions({
      headerRight: () => (
        <Button title="Go Home" onPress={onHome} disabled={count <= 0} />
      ),
    });
  }, [count, setOptions]);

  return (
    <Page>
      <Header>{name}</Header>

      <Button title={`Count ${count}`} onPress={() => setCount(count + 1)} />
    </Page>
  );
}

export default SupportScreen;

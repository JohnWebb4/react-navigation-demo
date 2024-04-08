import {RouteProp} from '@react-navigation/native';
import {ScrollView, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import {RootParams} from '../types/navigation';
import Header from './Header';

interface PageProps {
  route: RouteProp<RootParams, 'Hello'>;
}

function Page({route}: PageProps) {
  const {name} = route;

  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView contentContainerStyle={styles.container}>
        <Header>{name}</Header>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Page;

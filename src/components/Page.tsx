import {useCallback} from 'react';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {Button, ScrollView, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import {RootParams} from '../types/navigation';
import Header from './Header';

interface PageProps {
  children?: React.ReactNode;
  name: string;
  next?: string;
}

function Page({children, name, next}: PageProps) {
  const {navigate} = useNavigation<NavigationProp<RootParams>>();

  const onPress = useCallback(() => {
    if (next) {
      navigate(next);
    }
  }, [navigate, next]);

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <Header>{name}</Header>

        {next ? <Button onPress={onPress} title={`To ${next}`} /> : undefined}

        {children}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});

export default Page;

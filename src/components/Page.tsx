import {ScrollView, StyleSheet} from 'react-native';
import Header from './Header';
import {SafeAreaView} from 'react-native-safe-area-context';

interface PageProps {
  title: string;
}

function Page({title}: PageProps) {
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView contentContainerStyle={styles.container}>
        <Header>{title}</Header>
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

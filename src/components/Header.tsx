import React from 'react';
import {StyleSheet, Text} from 'react-native';

interface HeaderProps {
  children?: React.ReactNode | undefined;
}

function Header({children}: HeaderProps) {
  return <Text style={styles.header}>{children}</Text>;
}

const styles = StyleSheet.create({
  header: {
    fontSize: 100,
  },
});

export default Header;

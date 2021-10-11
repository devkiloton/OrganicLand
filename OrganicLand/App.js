import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Cesta from './src/views/Cart'

export default function App() {
  return (
    <View style={styles.container}>
      <Text>That is Organic Land!</Text>
      <Cesta/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00FF88',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

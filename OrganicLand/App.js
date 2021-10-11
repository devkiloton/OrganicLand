import React from 'react';
import { StatusBar, SafeAreaView} from 'react-native';

import Cart from './src/views/Cart'

export default function App() {
  return (
    <SafeAreaView>
      <StatusBar/>
      <Cart/>
    </SafeAreaView>
  );
}
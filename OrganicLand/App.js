import React from 'react';
import { StatusBar, SafeAreaView, View } from 'react-native';
import { useFonts, Montserrat_700Bold, Montserrat_400Regular } from '@expo-google-fonts/montserrat';
import Cart from './src/views/Cart/index';
import mock from './src/mocks/cart';
import AppLoading from 'expo-app-loading';

export default function App() {
  const [loadedFont] = useFonts({
    "MontserratRegular": Montserrat_400Regular,
    "MontserratBold": Montserrat_700Bold,
  });

  if(!loadedFont){
    return <AppLoading/>;
  }

  return (
    <SafeAreaView>
      <StatusBar/>
      <Cart {...mock}/>
    </SafeAreaView>
  );
}
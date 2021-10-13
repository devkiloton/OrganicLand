import React from 'react';
import { StatusBar, SafeAreaView, View, Button} from 'react-native';
import { useFonts, Montserrat_400Regular, Montserrat_700Bold, Montserrat_400Regular_Italic } from '@expo-google-fonts/montserrat';
import Cart from './src/views/Cart'

export default function App() {
  const [loadedFont] = useFonts({
    "MontserratRegular": Montserrat_400Regular,
    "MontserratBold": Montserrat_700Bold,
  });

  if(!loadedFont){
    return <View/>;
  }

  return (
    <SafeAreaView>
      <StatusBar/>
      <Cart/>
    </SafeAreaView>
  );
}
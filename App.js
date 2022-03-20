import React from 'react';
import Index from "./components/Index"
import { NavigationContainer } from '@react-navigation/native';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';

export default function App() {
  let [fontsLoaded] = useFonts({
    'Manrope-SemiBold': require('./assets/fonts/Manrope-SemiBold.ttf'),
    'Manrope-Bold': require('./assets/fonts/Manrope-Bold.ttf'),
    'Roboto-Regular': require('./assets/fonts/RobotoMono-Regular.ttf'),
    'Roboto-Light': require('./assets/fonts/RobotoMono-Light.ttf'),
    'Roboto-Thin': require('./assets/fonts/RobotoMono-Thin.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <NavigationContainer>
        <Index />
      </NavigationContainer>
    );
  }
}

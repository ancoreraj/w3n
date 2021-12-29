import React from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';
import Index from "./components/Index"
import { NavigationContainer } from '@react-navigation/native';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';

export default function App() {
  let [fontsLoaded] = useFonts({
    'Manrope-SemiBold': require('./assets/fonts/Manrope-SemiBold.ttf'),
    'Manrope-Bold': require('./assets/fonts/Manrope-Bold.ttf'),
    'Roboto-Regular': require('./assets/fonts/RobotoMono-Regular.ttf'),
    'Roboto-Thin': require('./assets/fonts/RobotoMono-Thin.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <NavigationContainer>
        <View style={styles.container}>
          <Index />
        </View>
      </NavigationContainer>
    );
  }



}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
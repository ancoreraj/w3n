import React from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';
import Index from "./components/Index"
import { NavigationContainer } from '@react-navigation/native';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';

export default function App() {
  let [fontsLoaded] = useFonts({
    'Inter-Black': require('./assets/fonts/RobotoMono-Medium.ttf'),
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
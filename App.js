import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import Screen from './constants/Screen'
import { SafeAreaView, StatusBar, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import FlashMessage from "react-native-flash-message";

const App = () => {
  return (
    <>
      <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
        <NavigationContainer>
          <Screen></Screen>
          <FlashMessage position="top" />
        </NavigationContainer>
      </SafeAreaView>
    </>
  )
}

export default App;

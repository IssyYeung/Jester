import 'react-native-gesture-handler';
import React from 'react';
// import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {RootNavigator} from './navigators/Root.navigator';
import {AppProvider} from './App.provider';

export default function App() {
  return (
    <AppProvider>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </AppProvider>
  );
}

// const styles = StyleSheet.create({});

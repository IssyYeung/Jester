import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useAppContext} from '../App.provider';

const appContext = useAppContext();

export const HistoryTab = () => {
  return (
    <View style={styles.container}>
      <Text>History Tab</Text>
      <Text>{appContext.greeting}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

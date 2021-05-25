import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useAppContext} from '../App.provider';

export const HistoryTab = () => {
  const {savedJokes} = useAppContext();
  console.log(savedJokes);

  return (
    <View style={styles.container}>
      {savedJokes.map(joke => (
        <Text>{joke}</Text>
      ))}
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

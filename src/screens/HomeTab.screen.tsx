import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {useAppContext} from '../App.provider';

export const HomeTab = () => {
  const {joke, handleFetchJoke, handleSaveJoke} = useAppContext();

  return (
    <View style={styles.container}>
      <Text>{joke}</Text>
      <TouchableOpacity>
        <Text onPress={handleSaveJoke}>Save</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text onPress={handleFetchJoke}>Discard</Text>
      </TouchableOpacity>
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

import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {useAppContext} from '../App.provider';
import {SpeechBubble} from '../components/SpeechBubble.image';

export const HomeTab = () => {
  const {joke, handleFetchJoke, handleSaveJoke} = useAppContext();

  return (
    <View style={styles.container}>
      <View style={styles.svgContainer}>
        <SpeechBubble />
        <Text style={styles.joke}>{joke}</Text>
      </View>
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
  svgContainer: {
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
  joke: {
    position: 'absolute',
    width: '80%',
    textAlign: 'center',
    transform: [{translateY: -20}],
  },
});

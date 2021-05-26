import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {useAppContext} from '../App.provider';
import {SpeechBubble} from '../components/SpeechBubble.image';

export const HomeTab = () => {
  const {newJoke, handleFetchJoke, handleSaveJoke} = useAppContext();

  return (
    <View style={styles.container}>
      <View style={styles.svgContainer}>
        <SpeechBubble />
        <Text style={styles.joke}>{newJoke}</Text>
        {/* .joke ? */}
      </View>
      <View style={styles.btns}>
        <TouchableOpacity style={[styles.btn, styles.save]}>
          <Text style={styles.btnText} onPress={handleSaveJoke}>
            Save
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.btn, styles.discard]}>
          <Text style={styles.btnText} onPress={handleFetchJoke}>
            Discard
          </Text>
        </TouchableOpacity>
      </View>
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
    width: '70%',
    textAlign: 'center',
    transform: [{translateY: -20}],
    fontSize: 18,
  },
  btns: {
    flexDirection: 'row',
  },
  btn: {
    width: 100,
    padding: 10,
    borderRadius: 10,
  },
  btnText: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
  },
  save: {
    backgroundColor: '#419d78',
    marginRight: 40,
  },
  discard: {
    backgroundColor: '#a3320b',
  },
});

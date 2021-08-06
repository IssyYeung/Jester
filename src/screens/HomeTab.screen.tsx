import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import React from 'react';
import {useAppContext} from '../App.provider';
import {SpeechBubble} from '../components/SpeechBubble.image';
import BackgroundImg from '../assets/images/background.jpg';
import {Cross} from '../components/Cross.icon';
import {Heart} from '../components/Heart.icon';

export const HomeTab = () => {
  const {newJoke, handleFetchJoke, handleSaveJoke} = useAppContext();

  return (
    <ImageBackground style={styles.container} source={BackgroundImg}>
      <View style={styles.svgContainer}>
        <SpeechBubble />
        <Text style={styles.joke}>{newJoke}</Text>
      </View>
      <View style={styles.btnsContainer}>
        <TouchableOpacity
          style={[styles.btn, styles.save]}
          onPress={handleSaveJoke}>
          <Heart />
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={handleFetchJoke}>
          <Cross />
        </TouchableOpacity>
      </View>
    </ImageBackground>
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
    width: '60%',
    textAlign: 'center',
    transform: [{translateY: -30}],
    fontSize: 18,
    fontFamily: 'Kalam-Regular',
  },
  btnsContainer: {
    flexDirection: 'row',
    transform: [{translateY: -65}],
  },
  btn: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: 'white',
    shadowOffset: {width: 5, height: 5},
    shadowColor: 'black',
    shadowOpacity: 0.1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  save: {
    marginRight: 15,
  },
});

import React from 'react';
import {View, Text, StyleSheet, ImageBackground} from 'react-native';
import BackgroundImg from '../assets/images/background-building.jpg';

export const AnalyticsTab = () => {
  return (
    <ImageBackground style={styles.container} source={BackgroundImg}>
      <View style={styles.textContainer}>
        <Text style={styles.heading}>Stats tab under construction</Text>
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
  textContainer: {
    backgroundColor: 'white',
    borderRadius: 30,
  },
  heading: {
    padding: 20,
    fontSize: 18,
    fontWeight: '700',
  },
});

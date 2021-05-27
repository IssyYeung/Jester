import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Svg, Path} from 'react-native-svg';

export function SpeechBubble() {
  return (
    <View style={styles.container}>
      <Svg height="80%" width="70%" viewBox="0 0 477.867 477.867" fill="white">
        <Path
          d="M426.667,0.002H51.2C22.923,0.002,0,22.925,0,51.202v273.067c0,28.277,22.923,51.2,51.2,51.2h60.587l-9.284,83.456
			c-1.035,9.369,5.721,17.802,15.09,18.837c4.838,0.534,9.674-1.023,13.292-4.279l108.919-98.014h186.863
			c28.277,0,51.2-22.923,51.2-51.2V51.202C477.867,22.925,454.944,0.002,426.667,0.002z"
        />
      </Svg>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    aspectRatio: 1,
    // backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

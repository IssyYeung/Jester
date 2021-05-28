import React from 'react';
import {View, Text, StyleSheet, ImageBackground} from 'react-native';
import BackgroundImg from '../assets/images/background-building.jpg';
import {VictoryLine, VictoryChart, VictoryTheme} from 'victory-native';

let data = [
  {day: '25 May', jokesSaved: 0},
  {day: '26 May', jokesSaved: 5},
  {day: '27 May', jokesSaved: 6},
  {day: '28 May', jokesSaved: 4},
];

export const AnalyticsTab = () => {
  return (
    <ImageBackground style={styles.container} source={BackgroundImg}>
      <View style={styles.textContainer}>
        <Text style={styles.heading}>Jokes Saved on Each Day</Text>
        <VictoryChart width={350} theme={VictoryTheme.material}>
          <VictoryLine data={data} x="day" y="jokesSaved" />
        </VictoryChart>
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
    paddingTop: 20,
    fontSize: 18,
    fontWeight: '700',
    textAlign: 'center',
  },
});

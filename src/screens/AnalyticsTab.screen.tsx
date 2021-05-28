import React, {useMemo} from 'react';
import {View, Text, StyleSheet, ImageBackground} from 'react-native';
import {JokeWithTimestampType} from '../App.provider';
import BackgroundImg from '../assets/images/background-emoji.jpg';
import {VictoryLine, VictoryChart, VictoryTheme} from 'victory-native';
import {useAppContext} from '../App.provider';
import orderBy from 'lodash/orderBy';
import groupBy from 'lodash/groupBy';
import format from 'date-fns/format';

type GroupedType = {
  day: JokeWithTimestampType[];
};

export const AnalyticsTab = () => {
  const {savedJokes} = useAppContext();

  const days = useMemo(() => {
    const ordered = orderBy(savedJokes, 'timestamp', 'desc');
    const grouped: GroupedType = groupBy(ordered, item =>
      format(new Date(item.timestamp), 'dd MMM'),
    );

    return Object.entries(grouped).map(([day, jokesInDay]) => ({
      day,
      jokesSaved: jokesInDay.length,
    }));
  }, [savedJokes]);

  return (
    <ImageBackground style={styles.container} source={BackgroundImg}>
      <View style={styles.textContainer}>
        <Text style={styles.heading}>Jokes Saved on Each Day</Text>
        <VictoryChart width={350} theme={VictoryTheme.material}>
          <VictoryLine data={days} x="day" y="jokesSaved" />
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

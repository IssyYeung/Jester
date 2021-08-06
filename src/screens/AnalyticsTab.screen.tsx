import React, {useMemo} from 'react';
import {View, Text, StyleSheet, ImageBackground} from 'react-native';
import {JokeWithTimestampType} from '../App.provider';
import BackgroundImg from '../assets/images/background-heart.jpeg';
import {
  VictoryLine,
  VictoryChart,
  VictoryTheme,
  VictoryAxis,
} from 'victory-native';
import {useAppContext} from '../App.provider';
import orderBy from 'lodash/orderBy';
import groupBy from 'lodash/groupBy';
import format from 'date-fns/format';

type GroupedType = {
  day: JokeWithTimestampType[];
};

export const AnalyticsTab = () => {
  const {savedJokes} = useAppContext();

  const data = useMemo(() => {
    const ordered = orderBy(savedJokes, 'timestamp', 'asc');
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
        <Text style={styles.heading}>Jokes Saved Each Day</Text>
        <VictoryChart
          width={320}
          theme={VictoryTheme.material}
          animate={{duration: 2000, easing: 'cubicInOut'}}>
          <VictoryAxis
            dependentAxis
            domain={[0]}
            style={{
              axis: {stroke: '#555E62'},
              grid: {
                // stroke: ({tick}) => (tick = '26 May' ? 'none' : '#E9EBEC'),
              },
              axisLabel: {padding: 30, fontWeight: '700', fontSize: 14},
            }}
            label="Number of Jokes Saved"
            tickFormat={t => Math.round(t)}
          />
          <VictoryAxis
            style={{
              axis: {stroke: '#555E62'},
              grid: {
                stroke: ({tick}) => (tick = 0 ? 'none' : '#E9EBEC'),
              },
              axisLabel: {padding: 30, fontWeight: '700', fontSize: 14},
            }}
            label="Date"
          />
          <VictoryLine
            data={data}
            x="day"
            y="jokesSaved"
            style={{
              data: {stroke: '#D81159'},
            }}
          />
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
    padding: 15,
  },
  heading: {
    paddingTop: 10,
    marginBottom: -30,
    fontSize: 20,
    fontFamily: 'Kalam-Bold',
    textAlign: 'center',
  },
});

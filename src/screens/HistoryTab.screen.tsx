import React, {useMemo} from 'react';
import {FlatList, ImageBackground, StyleSheet} from 'react-native';
import {useAppContext} from '../App.provider';
import format from 'date-fns/format';
import orderBy from 'lodash/orderBy';
import groupBy from 'lodash/groupBy';
import {Drawer} from '../components/Drawer';
import {JokeItem} from '../components/JokeItem';
import BackgroundImg from '../assets/images/background-emoji.jpg';

export const HistoryTab = () => {
  const {savedJokes} = useAppContext();

  const days = useMemo(() => {
    const ordered = orderBy(savedJokes, 'timestamp', 'desc');
    const grouped = groupBy(ordered, item =>
      format(new Date(item.timestamp), 'dd MMM yyyy'),
    );

    return Object.entries(grouped).map(([day, jokesInDay]) => ({
      day,
      jokesInDay,
    }));
  }, [savedJokes]);

  return (
    <ImageBackground style={styles.container} source={BackgroundImg}>
      <FlatList
        keyExtractor={item => item.day}
        data={days}
        renderItem={({item}) => (
          <Drawer title={item.day}>
            {item.jokesInDay.map(joke => (
              <JokeItem joke={joke} key={joke.timestamp} />
            ))}
          </Drawer>
        )}
      />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

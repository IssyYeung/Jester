import React, {useMemo} from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useAppContext} from '../App.provider';
import format from 'date-fns/format';
import orderBy from 'lodash/orderBy';
import groupBy from 'lodash/groupBy';
import {Drawer} from '../components/Drawer';
import {TouchableOpacity} from 'react-native-gesture-handler';

export const HistoryTab = () => {
  const {savedJokes, handleDeleteJoke} = useAppContext();

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
    <FlatList
      keyExtractor={item => item.day}
      data={days}
      renderItem={({item}) => (
        <Drawer title={item.day}>
          {item.jokesInDay.map((joke, index) => (
            <View key={index} style={styles.jokeContainer}>
              <Text style={styles.text}>{joke.joke}</Text>
              <View style={styles.dateAndBtn}>
                <Text style={[styles.text, styles.date]}>
                  {format(new Date(joke.timestamp), 'h:mmaaa')}
                </Text>
                <TouchableOpacity onPress={() => handleDeleteJoke(joke)}>
                  <Text style={[styles.text, styles.btnText]}>Delete</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </Drawer>
      )}
    />
  );
};

const styles = StyleSheet.create({
  jokeContainer: {
    padding: 10,
    backgroundColor: 'white',
    marginVertical: 5,
  },
  dateAndBtn: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
  },
  date: {
    fontWeight: '700',
  },
  btnText: {
    fontWeight: '700',
    color: 'red',
  },
});

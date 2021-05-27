import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import format from 'date-fns/format';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useAppContext} from '../App.provider';

export function JokeItem({joke}) {
  const {handleDeleteJoke} = useAppContext();
  return (
    <View style={styles.jokeContainer}>
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
  );
}

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
    color: '#D81159',
  },
});

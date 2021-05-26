import React, {useMemo} from 'react';
import {View, Text, FlatList} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useAppContext} from '../App.provider';
import format from 'date-fns/format';
import orderBy from 'lodash/orderBy';
import groupBy from 'lodash/groupBy';

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
    <SafeAreaView>
      <FlatList
        // // keyExtractor={item => item} // worked before?
        // keyExtractor={(item, index) => index.toString()} // to make keys unique?
        // data={savedJokes}
        // renderItem={({item}) => (
        //   <View>
        //     <Text>{item.joke}</Text>
        //     {/* <Text>{new Date(item.timestamp).toString()}</Text> */}
        //     <Text>
        //       {format(new Date(item.timestamp), "dd MMM, yyyy 'at' h:mmaaa")}
        //     </Text>
        //   </View>
        // )}

        keyExtractor={item => item.day}
        data={days}
        renderItem={({item}) => (
          <View>
            <Text>{item.day}</Text>
            {item.jokesInDay.map((joke, index) => (
              <View key={index}>
                <Text>{joke.joke}</Text>
                <Text>{format(new Date(joke.timestamp), 'h:mmaaa')}</Text>
              </View>
            ))}
          </View>
        )}
      />
    </SafeAreaView>
  );
};

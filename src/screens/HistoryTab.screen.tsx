import React from 'react';
import {View, Text, FlatList} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useAppContext} from '../App.provider';
import format from 'date-fns/format';

export const HistoryTab = () => {
  const {savedJokes} = useAppContext();
  console.log(savedJokes);

  return (
    <SafeAreaView>
      <FlatList
        keyExtractor={item => item}
        // keyExtractor={(item, index) => index.toString()}
        data={savedJokes}
        renderItem={({item}) => (
          <View>
            <Text>{item.joke}</Text>
            {/* <Text>{new Date(item.timestamp).toString()}</Text> */}
            <Text>
              {format(new Date(item.timestamp), "dd MMM, yyyy 'at' h:mmaaa")}
            </Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

import React from 'react';
import {View, Text, FlatList} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useAppContext} from '../App.provider';

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
            <Text>{item}</Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

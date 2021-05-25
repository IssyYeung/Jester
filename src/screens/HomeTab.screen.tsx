import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import React, {useState, useEffect, useCallback} from 'react';

const URL = 'https://icanhazdadjoke.com/';

export const HomeTab = () => {
  const [joke, setJoke] = useState('');
  //                         ^ should be string or object?
  const [savedJokes, setSavedJokes] = useState([]);

  const handleFetchJoke = useCallback(async () => {
    const response = await fetch(URL, {
      method: 'GET',
      headers: {Accept: 'application/json'},
    });
    if (response.ok) {
      const j = await response.json();
      setJoke(j.joke);
      // ^ .joke in here?
    }
  }, []);

  const handleSaveJoke = () => {
    setSavedJokes([joke, ...savedJokes]);
    handleFetchJoke();
  };

  useEffect(() => {
    handleFetchJoke();
    // handleSaveJoke(); ????
  }, [handleFetchJoke]);

  return (
    <View style={styles.container}>
      <Text>{joke}</Text>
      {/* ^ .joke in here? unhappy typescript? */}
      <TouchableOpacity>
        <Text onPress={handleSaveJoke}>Save</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text onPress={handleFetchJoke}>Discard</Text>
      </TouchableOpacity>
      <Text>{savedJokes}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

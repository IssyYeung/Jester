// what ??????

import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from 'react';
import {LayoutAnimation} from 'react-native';

const URL = 'https://icanhazdadjoke.com/';

type AppContextType = {
  newJoke: string;
  savedJokes: JokeWithTimestampType[];
  handleFetchJoke: () => void;
  handleSaveJoke: () => void;
  handleDeleteJoke: (selected: JokeWithTimestampType) => void;
};

export type JokeWithTimestampType = {
  joke: string;
  timestamp: number;
};

const defaultValue = {
  newJoke: '',
  savedJokes: [],
  handleFetchJoke: () => {},
  handleSaveJoke: () => {},
  handleDeleteJoke: () => {},
};

const AppContext = createContext<AppContextType>(defaultValue);

export const AppProvider: React.FC = ({children}) => {
  const [newJoke, setNewJoke] = useState<string>('');
  const [savedJokes, setSavedJokes] = useState<JokeWithTimestampType[]>([]);

  const handleFetchJoke = useCallback(async () => {
    const response = await fetch(URL, {
      method: 'GET',
      headers: {Accept: 'application/json'},
    });
    if (response.ok) {
      const j = await response.json();
      const jokeText = j.joke;
      setNewJoke(jokeText);
      // ^ .joke in here?
    }
  }, []);

  const handleSaveJoke = () => {
    let newState: JokeWithTimestampType[] = [
      {joke: newJoke, timestamp: Date.now()},
      ...savedJokes,
    ];
    setStorage(newState);
    setSavedJokes(newState);

    handleFetchJoke();
  };

  const handleDeleteJoke = (selected: JokeWithTimestampType) => {
    // make useCallback?
    let newState = savedJokes.filter(
      item => item.timestamp !== selected.timestamp,
    );
    setStorage(newState);
    setSavedJokes(newState);
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
  };

  const setStorage = async (jokesToStore: JokeWithTimestampType[]) => {
    await AsyncStorage.setItem('savedJokes', JSON.stringify(jokesToStore));
  };
  const getStorage = async () => {
    let storedJokes = await AsyncStorage.getItem('savedJokes');
    if (storedJokes != null) {
      setSavedJokes(JSON.parse(storedJokes));
    }
  };

  useEffect(() => {
    handleFetchJoke();
    getStorage();
  }, [handleFetchJoke]);

  return (
    <AppContext.Provider
      value={{
        newJoke,
        savedJokes,
        handleFetchJoke,
        handleSaveJoke,
        handleDeleteJoke,
      }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);

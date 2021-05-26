// what ??????

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from 'react';

const URL = 'https://icanhazdadjoke.com/';

type AppContextType = {
  newJoke: '';
  savedJokes: JokeWithTimestampType[];
  handleFetchJoke: () => void;
  handleSaveJoke: () => void;
  handleDeleteJoke: (selected: JokeWithTimestampType) => void;
};

type JokeWithTimestampType = {
  joke: string;
  timestamp: number;
};

const defaultValue = {
  newJoke: {},
  savedJokes: [],
  handleFetchJoke: () => {},
  handleSaveJoke: () => {},
  handleDeleteJoke: () => {},
};

const AppContext = createContext<AppContextType>(defaultValue);

export const AppProvider: React.FC = ({children}) => {
  const [newJoke, setNewJoke] = useState<JokeWithTimestampType>();
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
    setSavedJokes([{joke: newJoke, timestamp: Date.now()}, ...savedJokes]);
    handleFetchJoke();
  };

  const handleDeleteJoke = (selected: JokeWithTimestampType) => {
    setSavedJokes(
      savedJokes.filter(item => item.timestamp !== selected.timestamp),
    );
  };

  useEffect(() => {
    handleFetchJoke();
    // handleSaveJoke(); ????
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

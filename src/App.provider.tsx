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
  joke: string;
  savedJokes: string[];
  handleFetchJoke: () => void;
  handleSaveJoke: () => void;
};

const defaultValue = {
  joke: '',
  savedJokes: [],
  handleFetchJoke: () => {},
  handleSaveJoke: () => {},
};

const AppContext = createContext<AppContextType>(defaultValue);

export const AppProvider: React.FC = ({children}) => {
  const [joke, setJoke] = useState<string>('');
  //                         ^ should be string or object?
  const [savedJokes, setSavedJokes] = useState<string[]>([]);

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
    <AppContext.Provider
      value={{joke, savedJokes, handleFetchJoke, handleSaveJoke}}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);

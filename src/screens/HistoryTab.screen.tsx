import React, {useMemo} from 'react';
import {FlatList, ImageBackground, StyleSheet} from 'react-native';
import {useAppContext} from '../App.provider';
import format from 'date-fns/format';
import orderBy from 'lodash/orderBy';
import groupBy from 'lodash/groupBy';
import {Drawer} from '../components/Drawer';
import {JokeItem} from '../components/JokeItem';
import BackgroundImg from '../assets/images/background-saved.jpg';

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
            {item.jokesInDay.map((joke, index) => (
              <JokeItem joke={joke} key={index} />
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
//   jokeContainer: {
//     padding: 10,
//     backgroundColor: 'white',
//     marginVertical: 5,
//   },
//   dateAndBtn: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     marginTop: 10,
//   },
//   text: {
//     fontSize: 16,
//     textAlign: 'center',
//   },
//   date: {
//     fontWeight: '700',
//     color: '#1789FC',
//   },
//   btnText: {
//     fontWeight: '700',
//     color: '#D81159',
//   },
// });

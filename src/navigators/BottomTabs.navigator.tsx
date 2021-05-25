import React, {FC, Text} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeTab} from '../screens/HomeTab.screen';
import {HistoryTab} from '../screens/HistoryTab.screen';
import {AnalyticsTab} from '../screens/AnalyticsTab.screen';
import {JokeIcon} from '../components/Joke.icon.tsx';
import {SaveIcon} from '../components/Save.icon.tsx';
import {StatsIcon} from '../components/Stats.icon.tsx';

const BottomTabs = createBottomTabNavigator();

export const BottomTabsNavigator: FC = () => {
  return (
    <BottomTabs.Navigator
      screenOptions={({route}) => ({
        tabBarShowLabel: false, // this should turn off nav text??
        tabBarIcon: ({size}) => {
          if (route.name === 'HomeTab') {
            return <JokeIcon />;
          }
          if (route.name === 'HistoryTab') {
            return <SaveIcon />;
          }
          if (route.name === 'AnalyticsTab') {
            return <StatsIcon />;
          }
          return null;
        },
      })}
      >
      <BottomTabs.Screen name="HomeTab" component={HomeTab} options={{title: "Joke Jenerator"}} />
      <BottomTabs.Screen name="HistoryTab" component={HistoryTab} options={{title: "Saved Jokes"}} />
      <BottomTabs.Screen name="AnalyticsTab" component={AnalyticsTab} options={{title: "My Stats"}} />
    </BottomTabs.Navigator>
  );
};

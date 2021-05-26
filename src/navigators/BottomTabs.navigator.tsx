import React, {FC} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeTab} from '../screens/HomeTab.screen';
import {HistoryTab} from '../screens/HistoryTab.screen';
import {AnalyticsTab} from '../screens/AnalyticsTab.screen';
import {JokeIcon} from '../components/Joke.icon';
import {SaveIcon} from '../components/Save.icon';
import {StatsIcon} from '../components/Stats.icon';

const BottomTabs = createBottomTabNavigator();

export const BottomTabsNavigator: FC = () => {
  return (
    <BottomTabs.Navigator
      tabBarOptions={
        {showLabel: false} // this should turn off nav text??
      }
      screenOptions={({route}) => ({
        title: 'hwllo',
        tabBarIcon: () => {
          if (route.name === 'HomeTab') {
            return <JokeIcon size="30" />;
          }
          if (route.name === 'HistoryTab') {
            return <SaveIcon size="30" />;
          }
          if (route.name === 'AnalyticsTab') {
            return <StatsIcon size="30" />;
          }
          return null;
        },
      })}>
      <BottomTabs.Screen
        name="HomeTab"
        component={HomeTab}
        options={{title: 'Joke Jenerator'}}
      />
      <BottomTabs.Screen
        name="HistoryTab"
        component={HistoryTab}
        options={{title: 'Saved Jokes'}}
      />
      <BottomTabs.Screen
        name="AnalyticsTab"
        component={AnalyticsTab}
        options={{title: 'My Stats'}}
      />
    </BottomTabs.Navigator>
  );
};

import React, {FC} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeTab} from '../screens/HomeTab.screen';
import {HistoryTab} from '../screens/HistoryTab.screen';
import {AnalyticsTab} from '../screens/AnalyticsTab.screen';
import {JokeIcon} from '../components/Joke.icon';
import {SaveIcon} from '../components/Save.icon';
import {StatsIcon} from '../components/Stats.icon';
import {NavigatorScreenParams} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

export type RootStackParamList = {
  BottomTabs: NavigatorScreenParams<BottomTabsParamList>;
  ExampleModal: undefined;
};

export type BottomTabsParamList = {
  HomeTab: undefined;
  HistoryTab: undefined;
  AnalyticsTab: undefined;
};

const BottomTabs = createBottomTabNavigator<BottomTabsParamList>();
const ScreenStack = createStackNavigator();

export const BottomTabsNavigator: FC = () => {
  return (
    <BottomTabs.Navigator
      tabBarOptions={
        {showLabel: false} // this should turn off nav text??
      }
      screenOptions={({route}) => ({
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

        headerTitleStyle: {fontFamily: 'Kalam-Bold'},
        tabBarShowLabel: false,
        tabBarActiveTintColor: '#1D84B5',
        tabBarInactiveTintColor: '#8E9AAF',
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

import React, {FC} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeTab} from '../screens/HomeTab.screen';
import {HistoryTab} from '../screens/HistoryTab.screen';
import {AnalyticsTab} from '../screens/AnalyticsTab.screen';
// import {BottomTabsParamList} from '~/src/types';

const BottomTabs = createBottomTabNavigator();

export const BottomTabsNavigator: FC = () => {
  return (
    <BottomTabs.Navigator
    // tabBarIcon: ({ color, size }) => {
    //   if (route.name === 'HomeTab') {
    //     return <HomeIcon />;
    //   }
    //   if (route.name === 'HistoryTab') {
    //     return <ListIcon />;
    //   }
    //   if (route.name === 'AnalyticsTab') {
    //     return <AnalyticsIcon />;
    //   }
    //   return null;
    // }
    >
      <BottomTabs.Screen name="HomeTab" component={HomeTab} />
      <BottomTabs.Screen name="HistoryTab" component={HistoryTab} />
      <BottomTabs.Screen name="AnalyticsTab" component={AnalyticsTab} />
    </BottomTabs.Navigator>
  );
};

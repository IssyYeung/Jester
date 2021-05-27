import React, {FC} from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {BottomTabsNavigator} from './BottomTabs.navigator';

const RootStack = createStackNavigator();

export const RootNavigator: FC = () => {
  return (
    <RootStack.Navigator initialRouteName="BottomTabs">
      <RootStack.Screen
        name="Jester"
        component={BottomTabsNavigator}
        options={{headerShown: true}} // or true?? Heading bars?
      />
    </RootStack.Navigator>
  );
};

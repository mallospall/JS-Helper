/* eslint-disable react/jsx-filename-extension */
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import LoginScreen from '../screens/authScreens/LoginScreen';
import ComNav from './AppNavigators/ComNav';
import GeneralNav from './AppNavigators/GeneralNav';
import ProfleNav from './AppNavigators/ProfleNav';
import QuestionsNav from './AppNavigators/QuestionsNav';

const BottomTab = createBottomTabNavigator();

function BottomTabNavigator() {
  return (
    <BottomTab.Navigator>
      {/* <BottomTab.Screen
        name="HomeScreen"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="rocket" color={color} />,
          tabBarLabel: 'Главная',
        }}
      /> */}

      <BottomTab.Screen name="Profile" component={LoginScreen} />
      <BottomTab.Screen name="Questions" component={QuestionsNav} />
      <BottomTab.Screen name="General" component={GeneralNav} />
      <BottomTab.Screen name="Flow" component={ComNav} />
    </BottomTab.Navigator>

  );
}

export default BottomTabNavigator;

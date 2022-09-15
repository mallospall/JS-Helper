/* eslint-disable react/jsx-filename-extension */
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { StyleSheet } from 'react-native';
import NewsIcon from '../../assets/icons/news';
import QuestIcon from '../../assets/icons/quest';
import LoginScreen from '../screens/authScreens/LoginScreen';
import RegScreen from '../screens/authScreens/RegScreen';
import ComNav from './AppNavigators/ComNav';
import GeneralNav from './AppNavigators/GeneralNav';
import ProfleNav from './AppNavigators/ProfleNav';
import QuestionsNav from './AppNavigators/QuestionsNav';

const BottomTab = createBottomTabNavigator();

function BottomTabNavigator() {
  return (
    <BottomTab.Navigator screenOptions={{ headerShown: false, tabBarStyle: styleBar, tabBarShowLabel: false }}>
      <BottomTab.Screen name="General" component={GeneralNav} options={{ tabBarIcon: ({ focused }) => (<NewsIcon name="quest" color={focused} />) }} />
      <BottomTab.Screen name="Questions" component={QuestionsNav} />
      <BottomTab.Screen name="Flow" component={ComNav} options={{ tabBarIcon: ({ focused }) => (<QuestIcon name="quest" focused={focused} />) }} />
      <BottomTab.Screen name="Profile" component={ProfleNav} />
    </BottomTab.Navigator>

  );
}

const styleBar = StyleSheet.create({
  activeTintColor: 'rgba(0, 122, 255, 1)',
  backgroundColor: '#363636',
  borderRadius: 15,
  // bottom: 25,
  // left: 20,
  // marginRight: 20,
  position: 'absolute',

});

export default BottomTabNavigator;

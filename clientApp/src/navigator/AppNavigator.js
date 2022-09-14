/* eslint-disable react/jsx-filename-extension */
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import BottomTabNavigator from './BottomTabNavigator';

const AppStack = createNativeStackNavigator();

function AppNavigator() {
  return (
    <AppStack.Navigator>
      <AppStack.Screen name="App" component={BottomTabNavigator} />
    </AppStack.Navigator>
  );
}

export default AppNavigator;

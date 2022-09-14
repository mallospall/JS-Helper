/* eslint-disable react/jsx-filename-extension */
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

const ComStack = createNativeStackNavigator();

function ComNav() {
  return (
    <ComStack.Navigator>
      <ComStack.Screen />
    </ComStack.Navigator>

  );
}

export default ComNav;

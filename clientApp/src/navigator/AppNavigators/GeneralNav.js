import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

const GenStack = createNativeStackNavigator();

function GeneralNav() {
  return (
    <GenStack.Navigator>
      <GenStack.screen />
    </GenStack.Navigator>
  );
}

export default GeneralNav;

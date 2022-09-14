import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

const QuestStack = createNativeStackNavigator();

function QuestionsNav() {
  return (
    <QuestStack.Navigator>
      <QuestStack.Screen />
    </QuestStack.Navigator>

  );
}

export default QuestionsNav;

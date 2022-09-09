import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Homescreen from './components/Homescreen/Homescreen';
import Registration from './components/Registration/Registration';
import Login from './components/Login/Login';
import Game from './components/Game/Game';

const Stack = createNativeStackNavigator();

function StackNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Homescreen} options={{ title: 'Overview' }} />
        <Stack.Screen name="Reg" component={Registration} options={{ title: 'Registration' }} />
        <Stack.Screen name="Log" component={Login} options={{ title: 'Login' }} />
        <Stack.Screen name="Game" component={Game} options={{ title: 'Game-Page' }} />
      </Stack.Navigator>
    </NavigationContainer>

  );
}

export default StackNavigation;

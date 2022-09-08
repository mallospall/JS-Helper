/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Homescreen from './components/Homescreen/Homescreen';
import Registration from './components/Registration/Registration';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Homescreen} options={{ title: 'Overview' }} />
        <Stack.Screen name="Reg" component={Registration} options={{ title: 'Registration' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

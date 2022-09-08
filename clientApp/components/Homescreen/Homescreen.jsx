/* eslint-disable react/prop-types */
import React from 'react';
import { Button, View, Text } from 'react-native';

function Homescreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Registration"
        onPress={() => navigation.navigate('Reg')}
      />
    </View>
  );
}

export default Homescreen;

import React from 'react';
import { Button, Text, View } from 'react-native';
import Buttons from './Buttons';
import Example from './Example';
import Header from './Header';
import Qestion from './Qestion';

function Game() {
  return (
    <View>
      <Header />
      <Qestion />
      <Example />
      <Buttons />
    </View>
  );
}

export default Game;

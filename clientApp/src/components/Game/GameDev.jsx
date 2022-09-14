import React, { useState } from 'react';
import { Text, View } from 'react-native';
import Header from './Header';
import Buttons from './Buttons';
import Qestion from './Qestion';

function GameDev({ navigation }) {
  const [currentQestionId, setCurrentQestionId] = useState(0);
  return (
    <View>
      <Header currentQestionId={currentQestionId} />
      <Qestion currentQestionId={currentQestionId} />
      <Text> ты в гамедев</Text>
    </View>
  );
}

export default GameDev;

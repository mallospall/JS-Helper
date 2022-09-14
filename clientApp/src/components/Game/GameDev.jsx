import React, { useState } from 'react';
import { Text, View } from 'react-native';
import Header from './Header';
import Buttons from './Buttons';
import Qestion from './Qestion';

function GameDev({ navigation }) {
  const [currentQestionId, setCurrentQestionId] = useState(0);
  return (
    <View>
      <Text>dev</Text>
      <Header currentQestionId={currentQestionId} />
      <Qestion currentQestionId={currentQestionId} />
    </View>
  );
}

export default GameDev;

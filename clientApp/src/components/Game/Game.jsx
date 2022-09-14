import React, { useState } from 'react';
import { View } from 'react-native';
import Header from './Header';
import Buttons from './Buttons';
import Qestion from './Qestion';

function Game({ navigation }) {
  const [currentQestionId, setCurrentQestionId] = useState(0);
  return (
    <View>
      <Header currentQestionId={currentQestionId} />
      <Buttons
        currentQestionId={currentQestionId}
        setCurrentQestionId={setCurrentQestionId}
        navigation={navigation}
      />
      <Qestion currentQestionId={currentQestionId} />
    </View>
  );
}

export default Game;

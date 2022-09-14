import React, { useState } from 'react';
import { Text, View } from 'react-native';
import Header from './Header';
import Buttons from './Buttons';
import Qestion from './Qestion';

function Game({ navigation }) {
  const [currentQestionId, setCurrentQestionId] = useState(0);
  return (
    <View>
      <Header currentQestionId={currentQestionId} />
      <Text> ты в гаме</Text>
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

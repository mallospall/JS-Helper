import React from 'react';
import { Text, View } from 'react-native';

function Qestion() {
  return (
    <View style={{
      height: 150,
      alignItems: 'center',
    }}
    >
      <Text style={{ fontSize: 25 }}>
        Witch of the following is correct?
      </Text>
    </View>
  );
}

export default Qestion;

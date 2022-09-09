import React from 'react';
import { Text, View } from 'react-native';

function Header({ currentQestionId }) {
  return (
    <View style={{
      backgroundColor: '#423d53',
      height: '20%',
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
    }}
    >
      <Text style={{ fontSize: 40, color: 'white' }}>
        Вопрос: №
        {currentQestionId + 1}
      </Text>
    </View>
  );
}

export default Header;

import React from 'react';
import { Text, View } from 'react-native';

function Header() {
  const num = 12;
  return (
    <View style={{
      backgroundColor: '#423d53',
      height: 200,
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
    }}
    >
      <Text style={{ fontSize: 40, color: 'white' }}>
        Quiz: №
        {num}
      </Text>
    </View>
  );
}

export default Header;

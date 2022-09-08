import React, { useEffect, useState } from 'react';
import { Image, Text, View } from 'react-native';

function Qestion() {
  const [back, setBack] = useState([]);
  useEffect(
    () => fetch('http://localhost:3002/question')
      .then((res) => res.json())
      .then((data) => setBack(data[0])),
    [],
  );

  return (
    <View style={{
      height: 150,
      alignItems: 'center',
    }}
    >
      <Image source={{ uri: `http://localhost:3002${back?.question}` }} />

      <Text style={{ fontSize: 25 }}>
        {back?.list}
      </Text>
    </View>
  );
}

export default Qestion;

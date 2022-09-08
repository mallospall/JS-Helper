import React, { useEffect, useState } from 'react';
import { Image, Text, View } from 'react-native';

function Qestion() {
  const [back, setBack] = useState(null);
  const qestionBack = async () => {
    try {
      const response = await fetch('http://localhost:3002/question');
      const json = await response.json();
      setBack(json);
    } catch (error) {
      console.error(error);
    }
    //   .then((res) => res.json())
    //   .then((data) => setBack(data[0]));
  };
  useEffect(() => {
    qestionBack();
  }, []);
  console.log('------>', back);
  return (
    <View style={{
      height: 150,
      alignItems: 'center',
    }}
    >
      <Image
        style={{
          width: 45,
          height: 45,
        }}
        source={{ uri: `http://localhost:3002${back?.qestion}` }}
      />

      <Text style={{ fontSize: 25 }}>
        {back?.list}
      </Text>
    </View>
  );
}

export default Qestion;

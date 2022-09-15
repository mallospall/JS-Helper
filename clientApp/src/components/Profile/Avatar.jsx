import React from 'react';
import { Image, View } from 'react-native';

function Avatar({ auth }) {
  console.log('avatar auth ===>', auth);
  return (
    <View style={{ borderRadius: 50, border: 2, borderColor: 'black' }}>
      <Image
        source={{ uri: auth?.avatar }}
        style={{
          height: 200,
          width: 200,
          //   overflow: 'visible',
          borderRadius: 100,
          margin: 50,
        }}
      />
    </View>
  );
}

export default Avatar;

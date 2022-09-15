import React from 'react';
import { Image, View } from 'react-native';

function Avatar({ auth }) {
  console.log('avatar auth ===>', auth);
  return (
    <View>
      <Image
        source={{ uri: auth?.avatar }}
        style={{
          height: 200,
          width: 200,
          overflow: 'visible',
          borderRadius:10
        }}
      />
    </View>
  );
}

export default Avatar;

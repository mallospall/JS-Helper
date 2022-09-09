import React from 'react';
import { Image, View } from 'react-native';

function Example() {
  return (
    // style={{
    //   height: '25%',
    //   alignItems: 'center',
    //   backgroundColor: 'black',
    //   margin: 10,
    //   borderRadius: 10,
    // }}
    <View>
      {/* <Text style={{ color: 'white' }}>пример кода</Text> */}
      <Image
        style={{
          width: 200,
          height: 200,
          // alignItems: 'center',
        }}
        source={{ uri: 'https://avatarko.ru/img/kartinka/27/ogon_lev_26792.jp' }}
      />
    </View>
  );
}

export default Example;

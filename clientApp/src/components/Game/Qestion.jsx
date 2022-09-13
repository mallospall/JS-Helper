import React from 'react';
import { Image, View } from 'react-native';
import { useSelector } from 'react-redux';

function Qestion({ currentQestionId }) {
  const { qestionCategory } = useSelector((state) => state);
  return (
    <View>
      <View
        style={{
          margin: 10,
          alignItems: 'flex-end',
          height: '60%',
          alignItems: 'center',
        }}
      >
        <Image
          style={{
            resizeMode: 'stretch',
            height:
            150,
            width:
            300,
            borderRadius: 10,
          }}
          source={{
            uri: `https://js-helper.herokuapp.com${qestionCategory[currentQestionId]?.question}`,
          }}
        />
      </View>
    </View>
  );
}

export default Qestion;

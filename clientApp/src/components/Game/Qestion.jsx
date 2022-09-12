import React, { useEffect, useState } from 'react';
import { Image, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { getQestions, GET_QESTION_THUNK } from '../../redux/actions/qestionAction';

function Qestion({ currentQestionId }) {
  const { qestions } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GET_QESTION_THUNK());
  }, []);

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
            // 100,
            '60%',
            width:
            // 100,
            '80%',
            borderRadius: 10,
          }}
          source={{
            uri:
            `https://js-helper.herokuapp.com${qestions[0]?.question}`,
            // test[0]?.question, // <=== картинка не меняется динамически
            // qestions[currentQestionId]?.question,
          }}
        />
      </View>
    </View>
  );
}

export default Qestion;

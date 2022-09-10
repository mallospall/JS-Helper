import React, { useEffect, useState } from 'react';
import { Image, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import data from './data/testData'; // <----- замена беку на время
import { getQestions } from '../../redux/actions/Actions';

function Qestion({ currentQestionId }) {
  const { qestions } = useSelector((state) => state);
  const dispatch = useDispatch();

  const allQestions = data; // <----- замена беку на время
  dispatch(getQestions(allQestions));

  // test fetch to https heroku
  const [test, setTest] = useState('');
  useEffect(() => {
    async function img() {
      const ress = await fetch('https://teabloogg.herokuapp.com/api/teas');
      const json = await ress.json();
      setTest(json);
    }
    img();
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
            height: 100,
            // '80%',
            width: 100,
            // '80%',
            borderRadius: 10,
          }}
          source={{
            uri: test[0]?.img,
            // qestions[currentQestionId].question
          }}
        />
      </View>
    </View>
  );
}

export default Qestion;

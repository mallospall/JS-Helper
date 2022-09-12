import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Header from './Header';
import Buttons from './Buttons';
import Qestion from './Qestion';
import { GET_QESTION_THUNK, getQestions} from '../../redux/actions/qestionAction';

function Game({ navigation }) {
  // const { qestions } = useSelector((s) => s);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GET_QESTION_THUNK());
  }, []);
  // const allQestions = data; // <----- замена беку на время
  // dispatch(getQestions(allQestions));
  const [currentQestionId, setCurrentQestionId] = useState(0);

  return (
    <View>
      <Header currentQestionId={currentQestionId} />
      <Buttons
        currentQestionId={currentQestionId}
        setCurrentQestionId={setCurrentQestionId}
        navigation={navigation}
      />
      <Qestion currentQestionId={currentQestionId} />
    </View>
  );
}

export default Game;

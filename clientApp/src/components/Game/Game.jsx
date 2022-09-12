import React, { useState } from 'react';
import { View } from 'react-native';
import { useDispatch } from 'react-redux';
import Example from './Example';
import Header from './Header';
import Buttons from './Buttons';
import Qestion from './Qestion';
import { getQestions } from '../../redux/actions/Actions';
import data from './data/testData'; // <----- замена беку на время

function Game() {
  // const { qestions } = useSelector((s) => s);
  const dispatch = useDispatch();

  const allQestions = data; // <----- замена беку на время
  dispatch(getQestions(allQestions));
  const [currentQestionId, setCurrentQestionId] = useState(0);

  return (
    <View>
      <Header currentQestionId={currentQestionId} />
      <Buttons currentQestionId={currentQestionId} setCurrentQestionId={setCurrentQestionId} />
      <Qestion currentQestionId={currentQestionId} />
      {/* <Example currentQestionId={currentQestionId} /> */}
    </View>
  );
}

export default Game;

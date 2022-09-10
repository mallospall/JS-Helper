import React, { useState } from 'react';
import {
  StyleSheet, Text, TouchableOpacity, View,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { getQestions } from '../../redux/actions/Actions';
import data from './data/testData';
// <----- замена беку на время

// const styles = StyleSheet.create({
//   button: {
//     alignItems: 'center',
//     backgroundColor: '#DDDDDD',
//     padding: '3%',
//     margin: '3%',
//     marginLeft: '15%',
//     marginRight: '15%',
//     borderRadius: 10,
//   },
// });

function Buttons({ currentQestionId, setCurrentQestionId }) {
  const { qestions } = useSelector((state) => state);
  const dispatch = useDispatch();

  const allQestions = data; // <----- замена беку на время
  dispatch(getQestions(allQestions));

  const [currentOptionSelected, setCurrentOptionSelected] = useState(null);
  const [correctOption, setCorrectOption] = useState(null);
  const [isOptionDisabled, setIsOptionDisabled] = useState(false);
  const [score, setScore] = useState(0);
  const [showNextButton, setShowNextButton] = useState(false);
  const [showScoreModal, setShowScoreModal] = useState(false);

  const splitList = qestions[currentQestionId].list.split('|');

  const validateAnswer = (selectedOption) => {
    const currentCorrectOption = qestions[currentQestionId].answer;

    setCurrentOptionSelected(selectedOption);
    setCorrectOption(currentCorrectOption);
    setIsOptionDisabled(true);

    if (selectedOption === currentCorrectOption) {
      // console.log(score);
      setScore(score + 1);
      // console.log(score);
    }
    setShowNextButton(true);
  };

  const nextHandler = () => {
    if (currentQestionId === qestions.length - 1) {
      setShowScoreModal(true);
    }
    setCurrentQestionId(currentQestionId + 1);
    setCurrentOptionSelected(null);
    setCorrectOption(null);
    setIsOptionDisabled(false);
    setShowNextButton(false);
  };

  const renderNextButton = () => {
    if (showNextButton) {
      return (
        <TouchableOpacity
          onPress={nextHandler}
          style={{
            marginTop: 20, width: '100%', backgroundColor: 'yellow', padding: 20, borderRadius: 3,
          }}
        >
          <Text
            style={{ fontSize: 20, color: 'white', textAlign: 'center' }}
          >
            Next
          </Text>
        </TouchableOpacity>
      );
    }
    return null;
  };

  return (
    <View>
      { splitList?.map((elem) => (
        <TouchableOpacity
          style={{
            borderWidth: 3,
            borderColor:
            elem === correctOption ? 'green'
              : elem === currentOptionSelected ? 'red'
                : 'grey' + '20',
            height: 60,
            borderRadius: 20,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingHorizontal: 20,
            marginVertical: 10,
          }}
          onPress={() => validateAnswer(elem)}
          key={elem}
        >
          <Text>{elem}</Text>

          {/* PART OF CHECK THE CORRECT OR WRONG BUTTON ICON */}

          {
            // eslint-disable-next-line no-nested-ternary
            elem === correctOption ? (
              <View style={{
                width: 30,
                height: 30,
                borderRadius: 30 / 2,
                backgroundColor: 'green',
                justifyContent: 'center',
                alignItems: 'center',
              }}
              >
                <MaterialCommunityIcons
                  name="check"
                  style={{
                    color: 'white',
                    fontSize: 20,
                  }}
                />
              </View>
            ) : elem === currentOptionSelected ? (
              <View style={{
                width: 30,
                height: 30,
                borderRadius: 30 / 2,
                backgroundColor: 'red',
                justifyContent: 'center',
                alignItems: 'center',
              }}
              >
                <MaterialCommunityIcons
                  name="close"
                  style={{
                    color: 'white',
                    fontSize: 20,
                  }}
                />
              </View>
            ) : null
          }
          {/* BUTTON NEXT */}
        </TouchableOpacity>
      ))}
      {renderNextButton()}
    </View>
  );
}

export default Buttons;

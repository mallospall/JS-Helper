import React, { useState } from 'react';
import {
  Modal, Text, TouchableOpacity, View,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { getQestions } from '../../redux/actions/Actions';
import data from './data/testData';
// <----- замена беку на время

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

  const splitList = qestions[currentQestionId]?.list.split('|');

  const validateAnswer = (selectedOption) => {
    const currentCorrectOption = qestions[currentQestionId]?.answer;

    setCurrentOptionSelected(selectedOption);
    setCorrectOption(currentCorrectOption);
    setIsOptionDisabled(true);

    if (selectedOption === currentCorrectOption) {
      setScore(score + 1);
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
            marginTop: 20,
            width: '100%',
            backgroundColor: 'yellow',
            padding: 20,
            borderRadius: 10,
            border: 1,
            borderColor: 'black',
          }}
        >
          <Text
            style={{ fontSize: 20, color: 'black', textAlign: 'center' }}
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
          {/* QESTION BUTTON */}
          <Text
            style={{ fontSize: 20 }}
          >
            {elem}
          </Text>

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
        </TouchableOpacity>
      ))}

      {/* BUTTON NEXT */}
      {renderNextButton()}

      {/* SCORE MODAL */}
      <Modal
        animationType="slide"
        transparent
        visible={showScoreModal}
      >
        <View style={{
          flex: 1,
          backgroundColor: '#E1CC4F',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        >
          <View style={{
            backgroundColor: 'white',
            width: '90%',
            borderRadius: 20,
            padding: 20,
            alignItems: 'center',
          }}
          >
            <Text style={{ fontSize: 30, fontWeight: 'bold' }}>
              { score > (qestions.length / 2) ? 'Congratulations!' : 'Oops!' }
            </Text>

            <View style={{
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'center',
              marginVertical: 20,
            }}
            >
              <Text style={{
                fontSize: 30,
                color: score > (qestions.length / 2) ? 'green' : 'red',
              }}
              >
                {score}
              </Text>
              <Text style={{
                fontSize: 20, color: 'black',
              }}
              >
                /
                { qestions.length }

              </Text>
            </View>
            {/* will be button to retry or go to main page */}
          </View>
        </View>
      </Modal>
    </View>
  );
}

export default Buttons;

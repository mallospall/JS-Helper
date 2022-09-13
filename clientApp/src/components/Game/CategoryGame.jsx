import React from 'react';
import { Text, TouchableNativeFeedback, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { colors } from '../../../constants';
import { GET_QESTION_CATEGORY_THUNK } from '../../redux/actions/qestionAction';

function CategoryGame({ navigation }) {
  const dispatch = useDispatch();

  const categoryHandel = (categoryName) => {
    if (categoryName === 'jun') {
      dispatch(GET_QESTION_CATEGORY_THUNK(1));
    } else if (categoryName === 'mid') {
      dispatch(GET_QESTION_CATEGORY_THUNK(2));
    } else if (categoryName === 'sen') {
      dispatch(GET_QESTION_CATEGORY_THUNK(3));
    } else if (categoryName === 'rev') {
      dispatch(GET_QESTION_CATEGORY_THUNK(4));
    }
    navigation.navigate('Game');
  };

  return (
    <View
      style={{
        backgroundColor: colors.mainColor,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text
        style={{
          color: 'white',
          fontSize: 30,
        }}
      >
        Category
      </Text>

      <TouchableNativeFeedback
        style={{
          borderRadius: 10,
        }}
      >
        <Text
          onPress={() => categoryHandel('jun')}
          style={{
            backgroundColor: colors.buttonColor,
            paddingVertical: 10,
            marginVertical: 10,
            width: 300,
            height: 50,
            borderRadius: 20,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          Jun
        </Text>
      </TouchableNativeFeedback>
      <TouchableNativeFeedback>
        <Text
          onPress={() => categoryHandel('mid')}
          style={{
            backgroundColor: colors.buttonColor,
            paddingVertical: 10,
            marginVertical: 10,
            width: 300,
            height: 50,
            borderRadius: 20,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          Mid
        </Text>
      </TouchableNativeFeedback>
      <TouchableNativeFeedback>
        <Text
          onPress={() => categoryHandel('sen')}
          style={{
            backgroundColor: colors.buttonColor,
            paddingVertical: 10,
            marginVertical: 10,
            width: 300,
            height: 50,
            borderRadius: 20,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          Sen
        </Text>
      </TouchableNativeFeedback>
      <TouchableNativeFeedback>
        <Text
          onPress={() => categoryHandel('rev')}
          style={{
            backgroundColor: colors.buttonColor,
            paddingVertical: 10,
            marginVertical: 10,
            width: 300,
            height: 50,
            borderRadius: 20,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          Job
        </Text>
      </TouchableNativeFeedback>
    </View>
  );
}

export default CategoryGame;

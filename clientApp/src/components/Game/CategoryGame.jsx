import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { colors } from '../../../constants';
import { GET_QESTION_CATEGORY_THUNK } from '../../redux/actions/qestionAction';

function CategoryGame({ navigation }) {
  const dispatch = useDispatch();

  const categoryHandel = (categoryName) => {
    if (categoryName === 'jun') {
      dispatch(GET_QESTION_CATEGORY_THUNK(1));
      navigation.navigate('Game');
    } else if (categoryName === 'mid') {
      dispatch(GET_QESTION_CATEGORY_THUNK(2));
      navigation.navigate('Game');
    } else if (categoryName === 'sen') {
      dispatch(GET_QESTION_CATEGORY_THUNK(3));
      navigation.navigate('Game');
    } else if (categoryName === 'rev') {
      dispatch(GET_QESTION_CATEGORY_THUNK(4));
      navigation.navigate('GameDev');
    }
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

      <TouchableOpacity
        onPress={() => categoryHandel('jun')}
      >
        <View
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
          <Text>
            Jun
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => categoryHandel('mid')}
      >
        <View
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
          <Text>
            Mid
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => categoryHandel('sen')}
      >
        <View
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
          <Text>
            Sen
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => categoryHandel('rev')}
      >
        <View
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
          <Text>
            Job
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

export default CategoryGame;

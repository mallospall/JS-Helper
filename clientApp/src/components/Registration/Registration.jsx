/* eslint-disable react/prop-types */
/* eslint-disable no-tabs */
/* eslint-disable no-mixed-spaces-and-tabs */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  StyleSheet, Text, TextInput, View, Button,
  TouchableOpacity, Alert, AsyncStorage, KeyboardAvoidingView,
} from 'react-native';
import { colors } from '../../../constants';
import { SET_SESSION_THUNK } from '../../redux/actions/authAction';
import styles from '../Homescreen/stylesHomePage';
// import { getStorage, removeStorage } from '../../redux/actions/AsyncStorageFunc';

function Registration({ navigation }) {
  const [inputs, setInputs] = useState({ name: '', email: '', password: '' });

  const dispatch = useDispatch((s) => s);

  const submitHandler = () => {
    if (inputs.email !== '' || inputs.email !== '' || inputs.password !== '') {
      dispatch(SET_SESSION_THUNK(inputs));
      navigation.navigate('General');
    } else {
      Alert.alert('Ошибка', 'Заполните все поля');
    }
  };

  return (
    <KeyboardAvoidingView behavior="padding">
      <View
        style={{
			  backgroundColor: colors.mainColor,
			  height: '100%',
			  justifyContent: 'center',
			  alignItems: 'center',
        }}
      >
        <View style={{ width: 300 }}>
          <TextInput
            style={stylesCreated.input}
            placeholder="Enter name"
            onChangeText={(text) => setInputs({ ...inputs, name: text })}
          />
          <TextInput
            style={stylesCreated.input}
            placeholder="Enter email"
            onChangeText={(text) => setInputs({ ...inputs, email: text })}
          />
          <TextInput
            style={stylesCreated.input}
            placeholder="Enter password"
            secureTextEntry
            onChangeText={(text) => setInputs({ ...inputs, password: text })}
          />
          <TouchableOpacity
            style={styles.cardButton}
            title="Login"
            onPress={submitHandler}
          >

            <Text style={styles.buttonText}>Регистрация</Text>

          </TouchableOpacity>
          {/* <Button
          title="login"
          color="#fff"
          style
        /> */}
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const stylesCreated = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
  },
});

export default Registration;

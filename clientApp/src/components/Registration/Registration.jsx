/* eslint-disable no-tabs */
/* eslint-disable no-mixed-spaces-and-tabs */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  StyleSheet, Text, TextInput, View,
  TouchableOpacity,
} from 'react-native';
import { colors } from '../../../constants';
import { GET_SESSION_THUNK, SET_SESSION_THUNK } from '../../redux/actions/authAction';
import styles from '../Homescreen/stylesHomePage';

function Registration() {
  const [inputs, setInputs] = useState({ name: '', email: '', password: '' });

  const dispatch = useDispatch((s) => s);

  const submitHandler = () => {
    // dispatch(SET_SESSION_THUNK(inputs));
    console.log(inputs);
  };

  return (
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

import React, { useState } from 'react';
import {
  StyleSheet, Text, TextInput, View,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { colors } from '../../../constants';

function Login() {
  const { auth } = useSelector((s) => s);
  // const [input, setInput] = useState()
  console.log(auth);

  return (
    <View
      style={{
			  backgroundColor: colors.GOLD,
			  height: '100%',
			  justifyContent: 'center',
			  alignItems: 'center',
      }}
    >
      <View style={{ width: 300 }}>
        <TextInput
          style={stylesCreated.input}
          placeholder="Enter email"
        />
        <TextInput
          style={stylesCreated.input}
          placeholder="Enter password"
          secureTextEntry
        />
        <TouchableOpacity style={stylesCreated.input}>
          <Text style={{ textAlign: 'center' }}>Войти</Text>
        </TouchableOpacity>

        <TouchableOpacity style={stylesCreated.input}>
          <Text style={{ textAlign: 'center' }}>check</Text>
        </TouchableOpacity>
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

export default Login;

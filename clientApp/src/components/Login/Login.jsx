import React, { useState } from 'react';
import {
  StyleSheet, Text, TextInput, View, Button, Image, AsyncStorage
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { colors } from '../../../constants';

function Login() {
  const { auth } = useSelector((s)=>s)
  console.log(auth)
  const storeData = async () => {
    try {
      await AsyncStorage.setItem(
        '@MySuperStore:key',
        'I like to save it.'
      );
    } catch (error) {
      // Error saving data
    }
  };
  const checkData = async () => {
    try {
     const value = await AsyncStorage.getItem(
        '@MySuperStore:key'
      );
      console.log(value)
    } catch (error) {
      // Error saving data
    }
  };

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
        <TouchableOpacity onPress={storeData} style={stylesCreated.input} >
          <Text style={{ textAlign: 'center' }}>Войти</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={checkData} style={stylesCreated.input} >
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

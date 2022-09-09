import React, { useState } from 'react';
import {
  StyleSheet, Text, TextInput, View,
  TouchableOpacity,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { colors } from '../../../constants';
import styles from '../Homescreen/stylesHomePage';

function Login() {
  const { auth } = useSelector((s) => s);
  // const [input, setInput] = useState()
  // console.log(auth);

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
          placeholder="Enter email"
        />
        <TextInput
          style={stylesCreated.input}
          placeholder="Enter password"
          secureTextEntry
        />
        <TouchableOpacity style={styles.cardButton} onPress={()=>(console.log(auth))} >
          <Text style={styles.buttonText}>Войти</Text>
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

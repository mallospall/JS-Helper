/* eslint-disable react/prop-types */
import React from 'react';
import {
  StyleSheet, View, Text, TouchableOpacity,
} from 'react-native';
import { fontsText, fontsTitle, colors } from '../../../constants';

function Homescreen({ navigation }) {
  const styles = StyleSheet.create({
    card: {
      backgroundColor: '#363636', flex: 1, justifyContent: 'center', alignItems: 'center',
      // '#363636'
    },
    description: {
      fontFamily: fontsText.fontFamily,
      fontSize: 40,
      paddingVertical: 20,
      color: colors.buttonColor,
      fontWeight: '700',
      fontStyle: 'italic',

    },
    cardButton: {
      backgroundColor: colors.buttonColor,
      paddingVertical: 10,
      marginVertical: 10,
      width: 300,
      height: 50,
      borderRadius: 20,
      alignItems: 'center',
      justifyContent: 'center',
    },
    msg: {
      color: 'white',
      marginVertical: 20,
      fontSize: 16,
      width: 350,
      textAlign: 'center',
      color: 'white',
      fontFamily: fontsText.fontFamily,
    },
    buttonText: {
      fontSize: 20,
      fontFamily: fontsText.fontFamily,
    },
  });
  return (
    <View style={styles.card}>
      <Text style={styles.description}>JS - Helper</Text>
      <Text style={styles.msg}>Изучайтe JS вместе с нами и найдите свою первую работу</Text>
      <View style={styles.buttonBlock}>
        <TouchableOpacity
          style={styles.cardButton}
          title="Registration"
          onPress={() => navigation.navigate('Reg')}
        >
          <Text style={styles.buttonText}>Регистрация</Text>

        </TouchableOpacity>
        <TouchableOpacity
          style={styles.cardButton}
          title="Login"
          onPress={() => navigation.navigate('Log')}
        >

          <Text style={styles.buttonText}>Авторизация</Text>

        </TouchableOpacity>

      </View>
    </View>
  );
}

export default Homescreen;

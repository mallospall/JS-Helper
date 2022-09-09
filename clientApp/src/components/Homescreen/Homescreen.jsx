/* eslint-disable react/prop-types */
import React from 'react';
import {
  View, Text, TouchableOpacity,
} from 'react-native';
import { colors } from '../../../constants';
import styles from './stylesHomePage';

function Homescreen({ navigation }) {
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

/* eslint-disable react/prop-types */
import { AsyncStorage } from 'react-native';
import React, { useEffect } from 'react';
import {
  View, Text, TouchableOpacity,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { GET_SESSION_THUNK, LOGOUT_SESSION_THUNK } from '../../redux/actions/authAction';
// import { colors } from '../../../constants';
import styles from './stylesHomePage';

function Homescreen({ navigation }) {
  const { auth } = useSelector((s) => s);
  console.log('auth--->', auth);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GET_SESSION_THUNK());
  }, []);

  return (
    <View style={styles.card}>
      <Text style={styles.description}>JS - Helper</Text>
      <Text style={styles.msg}>Изучайтe JS вместе с нами и найдите свою первую работу</Text>
      <View style={styles.buttonBlock}>
        {!auth ? (
          <>
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
          </>
        ) : (
          <TouchableOpacity
            style={styles.cardButton}
            title="Logout"
            onPress={() => dispatch(LOGOUT_SESSION_THUNK())}
          >

            <Text style={styles.buttonText}>Выход</Text>

          </TouchableOpacity>
        )}

      </View>
    </View>
  );
}

export default Homescreen;

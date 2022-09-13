/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import {
  View, Text, TouchableOpacity,
  useWindowDimensions,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import RenderHTML from 'react-native-render-html';
import { GET_SESSION_THUNK } from '../../redux/actions/authAction';
// import { colors } from '../../../constants';
import styles from './stylesHomePage';

function Homescreen({ navigation }) {
  const { auth } = useSelector((s) => s);
  const { width } = useWindowDimensions();
  const dispatch = useDispatch();
  const [first, setfirst] = useState('');
  useEffect(() => {
    dispatch(GET_SESSION_THUNK());
  }, []);
  useEffect(() => {
    fetch('https://js-helper.herokuapp.com/test')
      .then((res) => res.json())
      .then((data) => setfirst({ html: data }));
  }, []);
  console.log(first);
  return (
    <View style={styles.card}>
      <Text style={styles.description}>JS - Helper</Text>
      <Text style={styles.msg}>Изучайтe JS вместе с нами и найдите свою первую работу</Text>
      <View style={styles.buttonBlock}>
        <RenderHTML
          contentWidth={width}
          source={first}
        />
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
            onPress={() => navigation.navigate('General')}
          >
            <Text style={styles.buttonText}>Get started</Text>
          </TouchableOpacity>
        )}

      </View>
    </View>
  );
}

export default Homescreen;

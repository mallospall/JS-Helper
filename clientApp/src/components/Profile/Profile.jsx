import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { login, LOGOUT_SESSION_THUNK } from '../../redux/actions/authAction';
import styles from '../Homescreen/stylesHomePage';
import Avatar from './Avatar';
import ProgressScore from './ProgressScore';

function Profile() {
  const navigation = useNavigation();
  const { auth } = useSelector((s) => s);
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(LOGOUT_SESSION_THUNK());
  };

  useEffect(() => {
    const prof = async () => {
      const response = await fetch(`https://js-helper.herokuapp.com/stat/0/${auth?.id}`);
      const json = await response.json();
      dispatch(login(json));
    };
    prof();
  }, []);
  return (
    <View
      style={styles.lk}
    >
      <Avatar auth={auth} />
      <View
        style={{
          color: 'white',
        }}
      >
        <Text style={{
          fontFamily: 'Menlo',
          fontSize: 30,
          fontWeight: '900',
          marginBottom: 40,
          color: 'white',
        }}
        >
          {auth?.userName}
        </Text>
      </View>
      <ProgressScore auth={auth} />
      <TouchableOpacity
        style={styles.cardButton}
        title="Logout"
        onPress={logoutHandler}
      >
        <Text style={styles.buttonText}>Выход</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.cardButton}
        title="Logout"
        onPress={() => navigation.navigate('About')}
      >
        <Text style={styles.buttonText}>О проекте</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Profile;

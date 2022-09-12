import React from 'react';
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';
import { LOGOUT_SESSION_THUNK } from '../../redux/actions/authAction';
import styles from '../Homescreen/stylesHomePage';
import SideMenu from '../SideMenu/SideMenu';
import ProgressScore from './ProgressScore';

function Profile({ navigation }) {
  const { auth } = useSelector((s) => s);
  const dispatch = useDispatch();
  console.log(auth);
  const logoutHandler = () => {
    dispatch(LOGOUT_SESSION_THUNK());
    navigation.navigate('Home');
  };
  return (
    <>
      <View style={styles.card}>
        <Text>{auth?.name}</Text>
        <ProgressScore />
        <TouchableOpacity
          style={styles.cardButton}
          title="Logout"
          onPress={logoutHandler}
        >
          <Text style={styles.buttonText}>Выход</Text>
        </TouchableOpacity>
      </View>
      <SideMenu navigation={navigation} />
    </>
  );
}

export default Profile;

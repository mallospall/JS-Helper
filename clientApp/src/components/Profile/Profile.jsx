import React, { useState, useContext } from 'react';
import {
  View, Text, TouchableOpacity, Switch,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { EventRegister } from 'react-native-event-listeners';
import { LOGOUT_SESSION_THUNK } from '../../redux/actions/authAction';
import styles from '../Homescreen/stylesHomePage';
import SideMenu from '../SideMenu/SideMenu';
import themeContext from '../config/themeContext';

function Profile({ navigation }) {
  const theme = useContext(themeContext);
  const [mode, setMode] = useState(false);
  const { auth } = useSelector((s) => s);
  const dispatch = useDispatch();
  console.log(auth);
  const logoutHandler = () => {
    dispatch(LOGOUT_SESSION_THUNK());
    navigation.navigate('Home');
  };
  return (
    <>
      <View style={[styles.card, { backgroundColor: theme.backgroundColor }]}>
        <Text style={[styles.buttonText, { color: theme.color }]}>{auth?.userName}</Text>
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
        <Switch
          value={mode}
          onValueChange={(value) => {
            setMode(value);
            EventRegister.emit('changeTheme', value);
          }}
        />
        <Text style={{ color: 'white' }}>Сменить тему</Text>
      </View>
      <SideMenu navigation={navigation} />
    </>
  );
}

export default Profile;

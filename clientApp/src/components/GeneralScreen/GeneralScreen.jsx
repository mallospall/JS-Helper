import React from 'react';
import { View, Text } from 'react-native';
import styles from '../Homescreen/stylesHomePage';
import SideMenu from '../SideMenu/SideMenu';

function GeneralScreen({ navigation }) {
  return (
    <>
      <View style={styles.card} >
        <Text>GENERALPAGE</Text>
      </View>
      <SideMenu navigation={navigation} />
    </>
  );
}

export default GeneralScreen;

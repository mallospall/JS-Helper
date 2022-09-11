import React from 'react';
import { View, Text } from 'react-native';
import styles from '../Homescreen/stylesHomePage';
import SideMenu from '../SideMenu/SideMenu';

function Community({ navigation }) {
  return (
    <>
      <View style={styles.card}>
        <Text>
          Community
        </Text>
      </View>
      <SideMenu navigation={navigation} />
    </>

  );
}

export default Community;

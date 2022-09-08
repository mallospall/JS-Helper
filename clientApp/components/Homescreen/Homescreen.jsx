/* eslint-disable react/prop-types */
import React from 'react';
import {
  StyleSheet, Button, View, Text,
} from 'react-native';

function Homescreen({ navigation }) {
  const styles = StyleSheet.create({
    card: {
      backgroundColor: '#363636', flex: 1, justifyContent: 'center', alignItems: 'center',
    },
    description: {
      fontSize: 40,
      paddingVertical: 20,
      color: 'white',
      fontWeight: '700',
    },
    cardButton: {
      paddingVertical: 20,
      marginVertical: 20,
      width: 200,

    },
    buttonBlock: {
      justifyContent: 'space-between',
      flexDirection: 'row',
    },
    msg: {
      color: 'white',
      marginVertical: 20,
      fontSize: 20,
      width: 350,
      textAlign: 'center',
    },
  });
  return (
    <View style={styles.card}>
      <Text style={styles.description}>Go to learn JS</Text>
      <Text style={styles.msg}>Изучайту JS вместе с нами и найдите свою первую работу</Text>
      <View style={styles.buttonBlock}>
        <Button
          style={styles.carBbutton}
          title="Registration"
          onPress={() => navigation.navigate('Reg')}
        />
        <Button
          style={styles.cardButton}
          title="Login"
          onPress={() => navigation.navigate('Log')}
        />
      </View>
    </View>
  );
}

export default Homescreen;

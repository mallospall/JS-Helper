import React, { useEffect, useRef, useState } from 'react';
import {
  Animated, StyleSheet, Text, View,
} from 'react-native';
import styles from '../Homescreen/stylesHomePage';

function Progress({ step, steps, height }) {
  const [width, setWidth] = useState(0);
  const animatedValue = useRef(new Animated.Value(-1000)).current;
  const reactive = useRef(new Animated.Value(-1000)).current;

  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: reactive,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, []);

  useEffect(() => {
    reactive.setValue(-width + (width * step) / steps);
  }, [step, width]);

  return (
    <>
      <Text
        style={{
          fontFamily: 'Menlo',
          fontSIze: 12,
          fontWeight: '900',
          marginBottom: 4,
        }}
      >
        Ваш прогресс:
        {step}
        /
        {steps}
      </Text>
      <View
        onLayout={(e) => {
          const newWigth = e.nativeEvent.layout.width;
          setWidth(newWigth);
        }}
        style={{
          width: 300,
          height,
          backgroundColor: 'rgba(0,0,0,0.1)',
          borderRadius: height,
          overflow: 'hidden',
        }}
      >
        <Animated.View
          style={{
            height,
            width: 300,
            borderRadius: height,
            backgroundColor: 'rgba(0,0,0,0.5)',
            position: 'absolute',
            left: 0,
            top: 0,
            transform: [{
              translateX: animatedValue,
            }],
          }}
        />
      </View>
    </>
  );
}

// <=== !!!!!!!!!!!!!!! ===> need to merge

function ProgressScore({ auth }) {
  return (
    <View style={styles.container}>
      {/* <Progress step={auth?.exp} steps={6110} height={20} /> */}
    </View>
  );
}

export default ProgressScore;

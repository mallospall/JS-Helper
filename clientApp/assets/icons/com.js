/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/jsx-props-no-spreading */
import { Image, View } from 'react-native';

function ComIcon({ focused, size }) {
  // console.log(focused);
  return (
  //   <View style={{flex: 0}}>
    <Image source={require('./com.png')} resizeMode="contain" style={{ width: 50, height: 50, tintColor: focused ? '#e32f45' : '#748c94' }} />
  //    </View>
  );
}

export default ComIcon;

/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/jsx-props-no-spreading */
import { Image, View } from 'react-native';

function NewsIcon({ focused }) {
    console.log(focused);
  return (
  // <View>
    <Image source={require('./news.png')} resizeMode="contain" style={{ with: 50, height: 50, tintColor: focused ? '#e32f45' : '#748c94' }} />
  // </View>
  );
}

export default NewsIcon;

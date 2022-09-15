/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/jsx-props-no-spreading */
import { Image } from 'react-native';

function NewsIcon({ focused }) {
  return (
    <Image source={require('./news.png')} resizeMode="contain" style={{ width: 50, height: 50, tintColor: focused ? '#e32f45' : '#748c94' }} />
  );
}

export default NewsIcon;
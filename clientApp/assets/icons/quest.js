/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/jsx-props-no-spreading */
import { Image } from 'react-native';

function QuestIcon({ focused }) {
  return (
    <Image source={require('../../src/components/SideMenu/icons/quest.png')} resizeMode="contain" style={{ width: 70, height: 70, tintColor: focused ? '#e32f45' : '#748c94' }} />
  );
}

export default QuestIcon;

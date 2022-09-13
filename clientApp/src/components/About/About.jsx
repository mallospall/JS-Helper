import React from 'react';
import {
  View, Text, Image, Linking, TouchableOpacity,
} from 'react-native';
import styles from '../Homescreen/stylesHomePage';

const hizGit = 'https://github.com/Sabre-hil';

export default function About() {
  return (
    <View style={styles.aboutContainer}>
      <Image
        style={styles.aboutImg}
        source={require('./dungeon-team.jpg')}
      />
      <Text style={styles.aboutText}>
        Привет дорогой пользователь мы команда разработчиков JS-Helper, мы очень рады что ты пользуешься нашим приложением и мы делаем все чтобы ты мог с весельем и пользой проводит свое время в нашем приложении, с любовью
        <TouchableOpacity title="Хизир Абдеев" onPress={() => { Linking.openURL(hizGit).catch((err) => console.log('Ошибка в соединении', err)); }}><Text style={styles.aboutTextLink}>Хизир Абдеев</Text></TouchableOpacity>
      </Text>

    </View>
  );
}

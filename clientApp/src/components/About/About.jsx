import React from 'react';
import {
  View, Text, Image, Linking, TouchableOpacity,
} from 'react-native';
import styles from '../Homescreen/stylesHomePage';

const hizirGit = 'https://github.com/Sabre-hil';
const zayushGit = 'https://github.com/mallospall';
const lekhaGit = 'https://github.com/pilpan';
const andreyGit = 'https://github.com/yyong1';
const hizInsta = 'https://www.instagram.com/duhur_dac/';

export default function About() {
  return (
    <View style={styles.aboutContainer}>
      <Image
        style={styles.aboutImg}
        source={require('./dungeon-team.jpg')}
      />
      <Text style={styles.aboutText}>
        Привет дорогой пользователь мы команда разработчиков JS-Helper, мы очень рады что ты пользуешься нашим приложением и мы делаем все чтобы ты мог с весельем и пользой проводит свое время в нашем приложении, с любовью
      </Text>
      <TouchableOpacity style={styles.aboutButton} title="Dungeon Masters" onPress={() => { Linking.openURL(hizInsta).catch((err) => console.log('Ошибка в соединении', err)); }}>
        <View style={styles.instaBlock}>
          <Image style={styles.logoHizImg} source={{ url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/768px-Instagram_logo_2016.svg.png' }} />
          <Text style={styles.aboutTextLink}>insta:Хизир</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.aboutButton} title="Dungeon Masters" onPress={() => { Linking.openURL(hizirGit).catch((err) => console.log('Ошибка в соединении', err)); }}>

        <Text style={styles.aboutTextLink}>Хизир Абдеев</Text>

      </TouchableOpacity>
      <TouchableOpacity style={styles.aboutButton} title="Dungeon Masters" onPress={() => { Linking.openURL(zayushGit).catch((err) => console.log('Ошибка в соединении', err)); }}><Text style={styles.aboutTextLink}>Аюш Джаднаем</Text></TouchableOpacity>
      <TouchableOpacity style={styles.aboutButton} title="Dungeon Masters" onPress={() => { Linking.openURL(andreyGit).catch((err) => console.log('Ошибка в соединении', err)); }}><Text style={styles.aboutTextLink}>Андрей Баранов</Text></TouchableOpacity>
      <TouchableOpacity style={styles.aboutButton} title="Dungeon Masters" onPress={() => { Linking.openURL(lekhaGit).catch((err) => console.log('Ошибка в соединении', err)); }}><Text style={styles.aboutTextLink}>Алексей Захаров</Text></TouchableOpacity>

    </View>
  );
}

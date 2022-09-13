import React, { useEffect, useState } from 'react';
import {
  View, Text, TouchableOpacity, Linking, ScrollView,
} from 'react-native';
import styles from '../Homescreen/stylesHomePage';
import SideMenu from '../SideMenu/SideMenu';

function GeneralScreen({ navigation }) {
  const [news, setNews] = useState([]);
  useEffect(() => {
    fetch('https://js-helper.herokuapp.com/news')
      .then((responce) => responce.json())
      .then((responce) => setNews(responce))
      .catch((err) => console.log('Произошла ошибка', err));
  }, []);
  return (
    <>
      <View style={styles.genCard}>
        <Text style={styles.genDescription}>Главные новости в мире IT</Text>
        <ScrollView>
          {news?.map((el) => (
            <TouchableOpacity style={styles.genLinkButton} title="link" onPress={() => { Linking.openURL(el.link).catch((err) => console.log('Ошибка в соединении', err)); }}>
              <Text style={styles.genNew}>{el.title}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
      <SideMenu navigation={navigation} />

    </>
  );
}

export default GeneralScreen;

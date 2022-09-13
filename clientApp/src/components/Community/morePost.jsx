/* eslint-disable no-use-before-define */
import React, { useEffect, useState } from 'react';
import {
  View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, Modal, TextInput
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { CREATE_COM_THUNK, GET_COMS_THUNK } from '../../redux/actions/postAction';
import styles from '../Homescreen/stylesHomePage';
import SideMenu from '../SideMenu/SideMenu';

function morePost({ route }) {
  const [input, setInput] = useState({ text: '' });
  const [toggle, setToggle] = useState(false);

  const openHandler = () => {
    setToggle(!toggle);
  };

  const dispatch = useDispatch();
  const post = route.params;
  const { coms, auth } = useSelector((s) => s);

  const submitHandler = () => {
    setToggle(!toggle);
    dispatch(CREATE_COM_THUNK(input, post.id, auth.id));
  };

  useEffect(() => {
    dispatch(GET_COMS_THUNK(post.id));
  }, []);

  return (
    <>
      <View style={style.post}>
        {post.postState ? (
          <View style={{
            borderColor: '#FF000', borderWidth: 5, borderRadius: 50, width: 30, marginStart: 280,
          }}
          />
        )
          : (
            <View style={{
              borderColor: '#98FF98', borderWidth: 5, borderRadius: 50, width: 30, marginStart: 280,
            }}
            />
          )}
        <View style={style.head}>
          <Image style={style.image} source={{ uri: post.User.avatar }} />
          <Text style={style.text}>{post.User.userName}</Text>
        </View>
        <Text style={style.text}>{post.title}</Text>
        <Text style={style.text}>{post.text}</Text>
        <View style={{ height: 300, width: 200 }}>
          <TouchableOpacity
            style={style.cardButton}
            title="Open"
            onPress={submitHandler}
          >

            <Text style={styles.buttonText}>Написать ответ</Text>

          </TouchableOpacity>
          <Text>Ответы:</Text>
          <ScrollView>
            {coms.map((el) => (
              <View style={{ marginTop: 10, borderWidth: 3, borderColor: '#fad481' }}>
                <View style={{ flexDirection: 'row' }}>
                  <Image style={style.image} source={{ uri: el.User.avatar }} />
                  <Text style={{ marginTop: 10 }}>{el.User.userName}</Text>
                </View>
                <Text>{el.text}</Text>
              </View>
            ))}
          </ScrollView>
        </View>
      </View>
      <SideMenu />
      <Modal animationType="slide" transparent visible={toggle}>
        <View style={styles.card}>
          <Text style={style.headText}>Ваш ответ</Text>
          <TextInput
            style={style.input}
            placeholder="Текст"
            onChangeText={(text) => setInput({ ...input, title: text })}
          />
          <TouchableOpacity
            style={style.cardButton}
            title="Send"
            onPress={submitHandler}
          >

            <Text style={styles.buttonText}>Ответить</Text>

          </TouchableOpacity>
          <TouchableOpacity
            style={style.cardButton}
            title="Close"
            onPress={openHandler}
          >

            <Text style={styles.buttonText}>Отмена</Text>

          </TouchableOpacity>
        </View>
      </Modal>
    </>
  );
}

const style = StyleSheet.create({
  post: {
    flex: 1,
    padding: 20,
    borderColor: '#fad481',
    borderWidth: 10,
    borderRadius: 50,
    marginTop: 30,
    backgroundColor: '#808080',
  },
  image: {
    resizeMode: 'stretch',
    width: 40,
    height: 40,
    // flex: 1,
    borderRadius: 50,

  },
  text: {
    color: 'white',
    marginTop: 10,
  },
  head: {
    flexDirection: 'row',
  },
  status: {
    marginTop: 54,
    backgroundColor: '#FF000',
    width: 30,
    height: 30,
    justifyContent: 'center,',
    borderRadius: 50,
    flex: 1,
  },

});

export default morePost;

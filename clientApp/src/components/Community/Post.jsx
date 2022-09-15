/* eslint-disable no-use-before-define */
/* eslint-disable react/prop-types */
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  View, Text, Image, StyleSheet, TouchableOpacity,
} from 'react-native';

function Post({ post }) {
  const navigation = useNavigation();

  return (
    <View style={style.post}>
      {post?.postState ? (
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
        <Image style={style.image} source={{ uri: post?.User?.avatar }} />
        <Text style={style.text}>{post?.User?.userName}</Text>
      </View>
      <Text style={style.text}>{post?.title}</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Post', post)}>
        <View style={{
          borderColor: '#F2F3F4', borderWidth: 5, borderRadius: 50, width: 260, marginStart: 30, marginTop: 20,
        }}
        />
      </TouchableOpacity>
    </View>
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

export default Post;

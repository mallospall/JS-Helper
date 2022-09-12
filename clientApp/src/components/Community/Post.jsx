import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

function Post({ post }) {
    console.log(post)
    return (
        <View style={style.post}>
            <View style={style.head} >
                <Image style={style.image} source={{uri: post.User.avatar}} /> 
             <Text style={style.text}>{post.User.userName}</Text>
             </View>
            <Text style={style.text} >{post.title}</Text>
            <Text style={style.text} >{post.text}</Text>
        </View>
    );
}

const style = StyleSheet.create({
    post : {
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
    }

})

export default Post;
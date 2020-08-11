import React from 'react';
import {StyleSheet, Text, View, ImageBackground} from 'react-native';

export const Post = ({post}) => {
    return <View style={styles.post}>
        <ImageBackground style={styles.image} source={{uri: post.img}}>
            <View style={styles.textWrap}>
                <Text style={styles.title}>{new Date(post.date).toLocaleDateString()}</Text>
            </View>
        </ImageBackground>
    </View>
};

const styles = StyleSheet.create({
    post: {
        marginBottom: 15,
        overflow: 'hidden'
    },
    image: {
        width: '100%',
        height: 200,
    },
    textWrap: {
        backgroundColor: 'black',
        paddingVertical: 5,
        alignItems: 'center',
        width: '100%',
        opacity: 0.7,
    },
    title: {
        color: 'white',
        fontFamily: 'open-regular',
    }
});
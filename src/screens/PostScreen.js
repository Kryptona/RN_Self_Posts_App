import React from 'react';
import {StyleSheet, Text, View, Image, Button, ScrollView, Alert} from 'react-native';
import {THEME} from "../theme";
import {DATA} from '../data';
import {Post} from "../components/Post";

export const PostScreen = ({route}) => {
    const postId = route.params.postId;

    const post = DATA.find(post => post.id === postId);

    const removeHandler = () => {
        Alert.alert(
            'Удаление поста',
            'Вы уверены, что хотите удалить пост?',
            [
                {
                    text: 'Отменить',
                    style: 'cancel'
                },
                { text: 'Удалить', style:'destructive', onPress: () => {} }
            ],
            { cancelable: false }
        );
    };
    
    return (
        <ScrollView>
            <View>
                <Image source={{uri: post.img}} style={styles.image}/>
                <View style={styles.textWrap}>
                    <Text style={styles.title}>
                        {post.text}
                    </Text>
                </View>
                <Button title='Delete' color={THEME.POWDER_PURUPURE_BT} onPress={removeHandler}/>
            </View>
        </ScrollView>
    )
};

PostScreen.options = ({route}) => {
    return {
        title: new Date(route.params.date).toLocaleDateString()
    }
};

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 200,
    },
    textWrap: {
        padding: 10,
    },
    title: {
        fontFamily: 'open-regular'
    }
});
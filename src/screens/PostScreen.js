import React, {useEffect} from 'react';
import {StyleSheet, Text, View, Image, Button, ScrollView, Alert} from 'react-native';
import {THEME} from "../theme";
import {DATA} from '../data';
import {Post} from "../components/Post";
import {AppHeaderIcon} from "../components/AppHeaderIcon";
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import {MainScreen} from "./MainScreen";

export const PostScreen = ({navigation, route}) => {
    
    console.log("Nav", navigation, "route", route);
    
    useEffect(() => {
        navigation.setParams({isBooked: isBooked});
    }, []);

    const postId = route.params.postId;

    const post = DATA.find(post => post.id === postId);

    const isBooked = post.isBooked;

    const removeHandler = () => {
        Alert.alert(
            'Удаление поста',
            'Вы уверены, что хотите удалить пост?',
            [
                {
                    text: 'Отменить',
                    style: 'cancel'
                },
                {
                    text: 'Удалить', style: 'destructive', onPress: () => {
                    }
                }
            ],
            {cancelable: false}
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

PostScreen.options = ({navigation, route}) => {
    const date = route.params.date;
    //todo будет падать скорее всего
    const isBooked = route.params.isBooked;
    
    const iconName = isBooked ? 'ios-star' : 'ios-star-outline';
    return {
        title: new Date(date).toLocaleDateString(),
        headerRight: () => (
            <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
                <Item title="Take a photo" iconName={iconName} onPress={() => console.log("1234")}/>
            </HeaderButtons>
        ),
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
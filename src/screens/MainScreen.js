import React from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import {HeaderButtons, Item} from "react-navigation-header-buttons";
import {DATA} from "../data";
import {Ionicons} from '@expo/vector-icons';
import {Post} from "../components/Post";
import {AppHeaderIcon} from "../components/AppHeaderIcon";

export const MainScreen = ({navigation}) => {
    const openPostHandler = (post) => {
        navigation.navigate('PostScreen', {postId: post.id, date: post.date})
    };
    return (
        <View style={styles.wrapper}>
            <FlatList
                data={DATA}
                keyExtractor={post => post.id.toString()}
                renderItem={({item}) =>
                    <Post post={item} onOpen={openPostHandler}/>
                }
            />
        </View>
    )
};

MainScreen.options = {
    headerTitle: 'Мой блог',
    headerRight: (
        <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
            <Ionicons name="md-camera" size={22} color="white" />
        </HeaderButtons>
    )
};

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        padding: 10,
    },
});
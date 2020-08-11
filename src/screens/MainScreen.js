import React from 'react';
import {StyleSheet, Text, View, Button, FlatList} from 'react-native';
import {THEME} from "../theme";
import {DATA} from "../data";
import {Post} from "../components/Post";

export const MainScreen = ({navigation}) => {
    const goToPost = () => {
        navigation.push('PostScreen')
    };
    return (
        // <View style={styles.center}>
        //     <Text>
        /*       MainScreen */
        /*    </Text>*/
        /*    <Button color={THEME.POWDER_PURUPURE_BT} title="To Post" onPress={goToPost}/>*/
        /*</View>*/
        <View style={styles.wrapper}>
            <FlatList
                data={DATA}
                keyExtractor={post => post.id.toString()}
                renderItem={({item}) =>
                    <Post post={item}/>
                }
            />
        </View>
    )
};

MainScreen.options = {
    headerTitle: 'Мой блог'
};

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        padding: 10,
    },
});
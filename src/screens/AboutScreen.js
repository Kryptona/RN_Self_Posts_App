﻿import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export const AboutScreen = ({}) => {
    return (
        <View style={styles.center}>
            <Text>
                MainScreen
            </Text>
        </View>
    )
};

const styles = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});
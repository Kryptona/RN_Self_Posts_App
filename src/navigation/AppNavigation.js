﻿import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {MainScreen} from "../screens/MainScreen";
import {PostScreen} from "../screens/PostScreen";
import {THEME} from "../theme";
import {AboutScreen} from "../screens/AboutScreen";
import {CreateScreen} from "../screens/CreateScreen";
import {BookedScreen} from "../screens/BookedScreen";

const PostNavigator = createStackNavigator();

export const AppNavigation = () => (
    <NavigationContainer>
        <PostNavigator.Navigator
            initialRouteName="MainScreen"
            headerMode="screen"
            screenOptions={{
                headerStyle: {
                    backgroundColor: THEME.POWDER_PURUPURE,
                },
                headerTintColor: THEME.WHITE_PINK,
            }}

        >
            <PostNavigator.Screen
                options={{title: PostScreen.options.headerTitle}}
                name="PostScreen"
                component={PostScreen}
            />
            <PostNavigator.Screen
                options={{title: MainScreen.options.headerTitle}}
                name="MainScreen"
                component={MainScreen}
            />
            <PostNavigator.Screen
                name="AboutScreen"
                component={AboutScreen}
            />
            <PostNavigator.Screen
                name="CreateScreen"
                component={CreateScreen}
            />
            <PostNavigator.Screen
                name="BookedScreen"
                component={BookedScreen}
            />
        </PostNavigator.Navigator>
    </NavigationContainer>
);
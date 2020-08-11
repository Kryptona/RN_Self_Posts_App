import 'react-native-gesture-handler';
import React, {useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {StyleSheet, Text, View} from 'react-native';
import {AppLoading} from 'expo';
import {bootstrap} from "./src/bootstrap";


export default function App() {
    const [isReady, setIsReady] = useState(false);


    if (!isReady) {
        return <AppLoading 
            startAsync={bootstrap}
            onFinish{() => setIsReady(true)} 
            onError={err => console.log(err)}
        />
    }
    return (
        <NavigationContainer>
            <View>
                <Text>Open up App.js to start working on your app!</Text>
            </View>
        </NavigationContainer>
       
    );
}

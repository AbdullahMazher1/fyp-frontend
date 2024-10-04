import React, { useState, useEffect } from 'react';
import { View, Text, Image, ActivityIndicator, TouchableOpacity } from 'react-native';
import * as Font from 'expo-font';
import styles from './FirstScreenStyle';

const loadFonts = async () => {
    await Font.loadAsync({
        'Poppins-Regular': require('../assets/fonts/Poppins-Regular.ttf'),
        'Poppins-Bold': require('../assets/fonts/Poppins-Bold.ttf'),
        'Inter': require('../assets/fonts/Inter_28pt-Regular.ttf'),
    });
};

const FirstScreen = () => {
    const [fontsLoaded, setFontsLoaded] = useState(false);

    useEffect(() => {
        loadFonts().then(() => setFontsLoaded(true));
    }, []);

    if (!fontsLoaded) {
        return <ActivityIndicator size="large" color="#0000ff" />; 
    }

    return (
        <View style={styles.iconContainer}>
            <Image
                style={styles.ImFirst}
                source={require('../assets/images/01.png')}
                resizeMode="cover"
            />
            <View style={styles.ViewFirst}>
                <Text style={styles.text}>
                    Get things done with <Text style={styles.text1}>Revent </Text>
                </Text>
                <Text style={styles.FirstDisp}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry standard dummy text
                </Text>
                <TouchableOpacity
                    style={styles.button}
                >
                    <Text style={styles.buttonText}>Get Started</Text>

                </TouchableOpacity>
                <Text style={styles.text01}>
                    Already have an account? <Text style={styles.text11}>Sign in </Text>
                </Text>
            </View>
        </View >
    );
};

export default FirstScreen;

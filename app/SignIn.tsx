import React from 'react';
import { View, TextInput, Text, Image, TouchableOpacity } from 'react-native';
import Circles from '../components/Circles';
import styles from './SignInStyle';
import styles1 from './FirstScreenStyle';
import { router } from 'expo-router';

const SignInScreen = () => {
    return (
        <View style={styles.SignInContainer}>
            <Circles />
            <View style={styles.SignInArea}>
                <Text style={styles1.text}>
                    <Text style={styles1.text1}>Welcome </Text> Back
                </Text>
                <TextInput
                    placeholder="Username"
                    style={styles.input}
                    selectionColor="#8C54B8"
                />
                <TextInput
                    placeholder="Password"
                    style={styles.input}
                    secureTextEntry={true}
                    selectionColor="#8C54B8"
                />
                <Image
                    style={styles.ImFirst}
                    source={require('../assets/images/02.png')}
                    resizeMode="cover"
                />
            </View>
            <View style={styles.SignInAreaBottom}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
                <Text style={styles.textforgotpassword}>Forgot Password</Text>
                <View style={{ borderBottomColor: 'black', borderBottomWidth: 1, marginVertical: 10, opacity: 0.4, width: 300 }} />
            </View>
            <View style={styles.SignInAreaBottom2}>
                <Text style={styles1.text01}>
                    Don't have an account?
                    <Text  onPress={() => router.push("./SignUp")} style={styles1.text11}> Sign Up</Text>
                </Text>
            </View>
        </View>
    );
};

export default SignInScreen;

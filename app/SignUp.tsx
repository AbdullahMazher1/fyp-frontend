import React from 'react';
import { View, TextInput, Text, Image, TouchableOpacity } from 'react-native';
import Circles from '../components/Circles';
import styles from './SignUpStyles';
import styles2 from './SignInStyle';
import styles1 from './FirstScreenStyle';
import { router } from 'expo-router';

const SignUp = () => {
    return (
        <View>
            <Circles />
            <View style={styles.SignUpArea}>
                <Text style={styles1.text}>
                    Welcome To <Text style={styles1.text1}> Revent </Text>
                </Text>
                <TextInput
                    placeholder="Username"
                    style={styles2.input}
                    selectionColor="#8C54B8"
                />
                <TextInput
                    placeholder="Password"
                    style={styles2.input}
                    secureTextEntry={true}
                    selectionColor="#8C54B8"
                />
                <TextInput
                    placeholder="Confirm Password"
                    style={styles2.input}
                    secureTextEntry={true}
                    selectionColor="#8C54B8"
                />
                <Image
                    style={styles.ImFirst}
                    source={require('../assets/images/03.png')}
                    resizeMode="cover"
                />
                <TouchableOpacity style={styles.button}>
                    <Text style={styles1.buttonText}>Get Registered</Text>
                </TouchableOpacity>
                <Text style={styles1.text01}>
                    Already have an account?
                    <Text onPress={() => router.push("./SignIn")} style={styles.text11}> Sign in</Text>
                </Text>
                <View style={styles.box}>
                    <TouchableOpacity style={styles.googleButton}>
                        <Image
                            source={require('../assets/images/04.png')}
                            style={styles.googleIcon}
                        />
                        <Text style={styles.googleButtonText}>Continue with Google</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default SignUp;

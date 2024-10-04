import React, { useState, useEffect } from 'react';
import { View, TextInput, Text, Image, ActivityIndicator, TouchableOpacity } from 'react-native';
import Circles from './Circles'
import styles from './SignUpStyles';
import styles2 from './SignInStyle';
import styles1 from './FirstScreenStyle';

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
                <TouchableOpacity
                    style={styles.button}
                >
                    <Text style={styles1.buttonText}>Get Registered</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.googleButton}>
                    <Image 
                        source={require('../assets/images/04.png')} 
                        style={styles.googleIcon}
                    />
                    <Text style={styles.googleButtonText}>Continue with Google</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
};
export default SignUp;
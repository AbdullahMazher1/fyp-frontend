import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    SignInContainer: {
       
    },
    circle: {
        backgroundColor: '#AD58E1',
        height: 140,
        width: 140,
        borderRadius: 80,
        opacity: 0.46,
        marginLeft: -70,
        marginTop: 0,
    },
    circle2: {
        backgroundColor: '#AD58E1',
        height: 150,
        width: 150,
        borderRadius: 80,
        opacity: 0.46,
        marginLeft: 0,
        marginTop: -200,
    },
    button: {
        backgroundColor: '#8C54B8',
        color: '#FFFFFF',
        width: 80,
        height: 30,
        borderRadius: 5,
        justifyContent: 'center',
        marginBottom: 10,
    },
    buttonText: {
        fontSize: 13,
        justifyContent: 'center',
        fontWeight: '600',
        textAlign: 'center',
        color: '#FFFFFF'
    },
    ImFirst: {
        marginTop: -200,
        marginLeft: 100,
        width: 300,
        height: 350,
        zIndex: -1,
    },
    SignInArea: {
        paddingTop: 130,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
    },
    input: {
        width: 300,
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        marginVertical: 10,
        zIndex: 2,
    },
    textforgotpassword:{
        fontSize: 12,
        opacity: 0.8,
    },
    SignInAreaBottom: {
        marginTop: -116,
        marginLeft: 42,
    },
    SignInAreaBottom2: {
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'center',
    }
});

export default styles;
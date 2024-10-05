import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    SignInContainer: {
       
    },
    button: {
        backgroundColor: '#8C54B8',
        color: '#FFFFFF',
        width: 82,
        height: 32,
        borderRadius: 5,
        justifyContent: 'center',
        marginBottom: 10,
        zIndex: 9,
    },
    buttonText: {
        fontSize: 13,
        justifyContent: 'center',
        fontWeight: '600',
        textAlign: 'center',
        color: '#FFFFFF'
    },
    ImFirst: {
        marginTop: -280,
        marginLeft: 80,
        width: 380,
        height: 450,
        zIndex: 4,
    },
    SignInArea: {
        paddingTop: 100,
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
        marginTop: -134,
        marginLeft: 45,
    },
    SignInAreaBottom2: {
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'center',
    }
});

export default styles;
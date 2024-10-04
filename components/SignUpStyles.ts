import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    SignUpArea: {
    marginTop: 80,
    alignItems: 'center',
    justifyContent: 'center',
    },
    text11: {
        margin: 10,
        color: '#8C54B8',
        fontWeight: 'bold',
        marginLeft: 260,
    },
    googleButton: {
        flexDirection: 'row',
        marginTop: 20,
        backgroundColor: 'transparent', 
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        marginVertical: 10,
    },
    googleIcon: {
        width: 24, 
        height: 24,
        marginRight: 10, 
    },
    googleButtonText: {
        color: '#0c0c0c', 
        fontSize: 14,

    },
    button: {
        marginTop: 20,
        backgroundColor: '#8C54B8',
        color: '#FFFFFF',
        height: 58,
        width: 300,
        borderRadius: 5,
        justifyContent: 'center',
    },
    ImFirst: {
        height: 230,
        width: 230,
        objectFit: 'contain',
        zIndex: 3,
        marginTop: -180,
        marginLeft: 180,
    }
});
export default styles;
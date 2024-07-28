import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        paddingBottom: 40
    },

    buttonEndereco: {
        width: '100%',
        height: 70,
        backgroundColor: 'rgb(242, 242, 242)',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        borderRadius: 16
    },

    buttonText: {
        color: 'black',
        fontSize: 16
    },

    button: {
        marginTop: 'auto'
    },
    
    title: {
        fontSize: 40,
        fontWeight: 'bold',
        marginBottom: 16
    },

    text: {
        lineHeight: 33,
        fontSize: 20,
        marginBottom: 25
    },
})
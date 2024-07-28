import { StyleSheet } from 'react-native';
import { styles } from '../../../../styles';

export const accessStyles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 50
    },

    content: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    inputConteiner: {
        ...styles.inputConteiner,
        width: '100%'
    },

    title: {
        fontSize: 54,
        fontWeight: 'bold',
        marginBottom: 16
    }
})
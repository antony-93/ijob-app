import { TouchableOpacity, TouchableOpacityProps, Text, StyleSheet } from "react-native";

interface MyButtonProps extends TouchableOpacityProps {
    title: string;
}

export function MyButton({ title, style, ...rest }: MyButtonProps) {
    return (
        <TouchableOpacity {...rest} style={[styles.button, style]}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    text: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: 50,
        backgroundColor: 'white',
        borderWidth: 1,
        borderRadius: 8,
    }
})


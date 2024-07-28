import { StyleSheet } from "react-native";
import { TextInputMask } from 'react-native-masked-text';

export function MyTextInputMask(props: any) {
    return (
        <TextInputMask
            placeholderTextColor="#727272"
            {...props}
            style={[props.style, styles.input]}
        />
    )
}

const styles = StyleSheet.create({
    input: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: 50,
        color: 'black',
        borderWidth: 1,
        borderRadius: 8,
        padding: 10
    }
})
import { View, Text, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { MyButton } from "../../../core/components/MyButton";
import { accessStyles } from "../styles/Styles";
import * as SecureStore from 'expo-secure-store';
import * as LocalAuthentication from 'expo-local-authentication';
import { useAuth } from "../../../core/context/Auth";

export default function Access() {
    const navigation = useNavigation<any>(),
        { autenticar } = useAuth();

    const handleEntrar = async () => {
        const userData = await SecureStore.getItemAsync('user_data');

        if (userData) {
            const usuario = JSON.parse(userData);

            if (usuario.autenticacaoBiometrica) {
                const isBiometricEnrolled = await LocalAuthentication.isEnrolledAsync();

                if (!isBiometricEnrolled) {
                    return Alert.alert('Login', 'Biometria não encontrada');
                }

                const auth = await LocalAuthentication.authenticateAsync({
                    promptMessage: 'Login com biometria',
                    fallbackLabel: 'Biometria não reconhecida'
                })

                if (auth.success) {
                    await autenticar({ email: usuario.email, senha: usuario.senha });
                }
            }

            if (!usuario.autenticacaoBiometrica) {
                await autenticar({ email: usuario.email, senha: usuario.senha });
            }
        } else {
            navigation.navigate('Introducao');
        }

    }

    return (
        <View style={[accessStyles.container]}>
            <View style={accessStyles.content}>
                <Text style={accessStyles.title}>IJOB</Text>
            </View>
            <MyButton title="Entrar" onPress={handleEntrar}></MyButton>
        </View>
    );
}
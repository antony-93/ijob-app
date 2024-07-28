import { useEffect } from "react";
import { View, Text, Alert } from "react-native";
import * as SecureStore from 'expo-secure-store';
import * as LocalAuthentication from 'expo-local-authentication';

export default function Home() {
    const verificaAutenticacaoBiometrica = async () => {
        const usuarioData = await SecureStore.getItemAsync('user_data'),
            usuario = (usuarioData) ? JSON.parse(usuarioData) : null,
            compatible = await LocalAuthentication.hasHardwareAsync(),
            supportedTypes = await LocalAuthentication.supportedAuthenticationTypesAsync(),
            isBiometricEnrolled = await LocalAuthentication.isEnrolledAsync();

        if (!compatible || usuario?.jaPerguntou || usuario?.autenticacaoBiometrica || !supportedTypes.includes(LocalAuthentication.AuthenticationType.FINGERPRINT)) return;

        const validaAutenticacaoBiometrica = async () => {
            if (!isBiometricEnrolled) {
                return Alert.alert('Login', 'Biometria não encontrada');
            }

            const auth = await LocalAuthentication.authenticateAsync({
                promptMessage: 'Login com biometria',
                fallbackLabel: 'Biometria não reconhecida'
            });

            if (auth.success) {
                await SecureStore.setItemAsync('user_data', JSON.stringify({ ...usuario, autenticacaoBiometrica: true }));
            }
        }

        Alert.alert(
            'Autenticação biométrica',
            'Deseja adicionar autenticação por biometria?',
            [
                {
                    text: 'Não',
                    onPress: async () => await SecureStore.setItemAsync('user_data', JSON.stringify({ ...usuario, jaPerguntou: true })),
                    style: 'cancel',
                },
                {
                    text: 'Sim',
                    onPress: async () => await validaAutenticacaoBiometrica()
                },
            ],
            { cancelable: false }
        );
    }

    useEffect(() => {
        verificaAutenticacaoBiometrica()
    }, [])

    return (
        <View>
            <Text>Home</Text>
        </View>
    )
}
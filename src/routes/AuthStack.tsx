import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Access from "../modules/Access/screens/Access";
import Introducao from "../modules/Usuario/Cadastro/screens/Introdução";
import DadosPessoais from "../modules/Usuario/Cadastro/screens/DadosPessoais";
import Senha from "../modules/Usuario/Cadastro/screens/Senha";
import SignIn from "../modules/Access/screens/SignIn";

export function AuthStack() {
    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName="Access">
            <Stack.Screen name="Access" component={Access} />
            <Stack.Screen name="SignIn" component={SignIn} />
            <Stack.Screen name="Introducao" component={Introducao} />
            <Stack.Screen name="DadosPessoais" component={DadosPessoais} />
            <Stack.Screen name="Senha" component={Senha} />
        </Stack.Navigator>
    );
}
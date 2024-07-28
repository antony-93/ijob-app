import { View, Text } from "react-native";
import { MyButton } from "../../../../core/components/MyButton";
import { useNavigation } from "@react-navigation/native";
import MyScrollView from "../../../../core/components/MyScrollView";
import { styles } from "../../../../../styles";
import { registerStyle } from "../styles/Styles";

export default function Introducao() {
    const navigation = useNavigation<any>();

    return (
        <MyScrollView>
            <View style={styles.container}>
                <View style={styles.flex_1}>
                    <Text style={registerStyle.titleIntro}>Bem vindo ao IJOB</Text>
                    <Text style={registerStyle.text}>
                        Vimos que você é novo por aqui,
                        que tal começarmos criando uma nova conta para você :)
                    </Text>

                    <Text style={registerStyle.link}>Click aqui caso você já possua cadastro</Text>
                </View>

                <MyButton title="Começar" onPress={() => navigation.navigate('DadosPessoais')}></MyButton>
            </View>
        </MyScrollView>
    );
};
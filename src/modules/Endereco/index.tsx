import { View, Text, TouchableHighlight } from "react-native";
import { styles } from "./styles";
import { Ionicons } from "@expo/vector-icons";
import { useRoute } from "@react-navigation/native";
import MyScrollView from "../../core/components/MyScrollView";
import { MyButton } from "../../core/components/MyButton";
import { useForm } from "react-hook-form";
import { IUsuario } from "../Usuario/Models/IUsuario";

export default function Endereco() {
    const { params } = useRoute<any>(),
        { control, formState: { errors }, handleSubmit } = useForm<IUsuario>(),
        usuario = params.usuario as IUsuario || {};

    const onSubmit = async (data: IUsuario) => {
        console.log('teste')
    };

    return (
        <MyScrollView>
            <View style={styles.container}>
                <Text style={styles.title}>Endereço</Text>
                <Text style={styles.text}>Adicione os endereços onde você deseja que o serviço seja executado</Text>

                <TouchableHighlight style={styles.buttonEndereco} underlayColor="rgba(0, 0, 0, 0.03)" onPress={() => console.log("teste")}>
                    <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center", marginRight: 20 }}>
                        <Ionicons name="add" size={32} style={{marginRight: 10}} />
                        <Text style={styles.buttonText}>Adicionar novo endereço</Text>
                    </View>
                </TouchableHighlight>

                <MyButton title="Continuar" style={styles.button} onPress={handleSubmit(onSubmit)} />
            </View>
        </MyScrollView>
    );
};
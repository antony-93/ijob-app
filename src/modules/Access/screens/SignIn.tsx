import { View, Text } from "react-native";
import MyScrollView from "../../../core/components/MyScrollView";
import { TextInputController } from "../../../core/components/Controller/TextInputController";
import { useForm } from "react-hook-form";
import { IUsuario } from "../../Usuario/Models/IUsuario";
import { styles } from "../../../../styles";
import { useAuth } from "../../../core/context/Auth";
import { MyButton } from "../../../core/components/MyButton";
import { accessStyles } from "../styles/Styles";

export default function SignIn() {
    const { control, formState: { errors }, handleSubmit } = useForm<IUsuario>(),
        { autenticar } = useAuth();

    const handleAutenticar = async (data: IUsuario) => {
        await autenticar(data);
    }

    return (
        <MyScrollView hiddenHeader={true}>
            <View style={[styles.container, accessStyles.content]}>
                <Text style={[accessStyles.title, { marginBottom: 50 }]}>IJOB</Text>

                <View style={accessStyles.inputConteiner}>
                    <TextInputController
                        placeholder="Email"
                        name="email"
                        control={control}
                        rules={{ required: 'Email é obrigatório' }}
                    />
                    {errors.email && <Text style={styles.error}>{errors.email.message}</Text>}
                </View>

                <View style={accessStyles.inputConteiner}>
                    <TextInputController
                        placeholder="Senha"
                        name="senha"
                        control={control}
                        rules={{ required: 'Senha é obrigatório' }}
                    />
                    {errors.senha && <Text style={styles.error}>{errors.senha.message}</Text>}
                </View>

                <MyButton title="Entrar" onPress={handleSubmit(handleAutenticar)} />
            </View>
        </MyScrollView>
    )
}
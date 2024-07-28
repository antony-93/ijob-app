import { View, Text, KeyboardAvoidingView, ScrollView } from "react-native";
import { DateInputController } from "../../../../core/components/Controller/DateInputController";
import { TextInputController } from "../../../../core/components/Controller/TextInputController";
import { useForm } from "react-hook-form";
import { MyButton } from "../../../../core/components/MyButton";
import { useNavigation } from "@react-navigation/native";
import MyScrollView from "../../../../core/components/MyScrollView";
import { registerStyle } from "../styles/Styles";
import { styles } from "../../../../../styles";
import { IUsuario } from "../../Models/IUsuario";
import { TextInputMaskController } from "../../../../core/components/Controller/TextInputMaskController";

export default function DadosPessoais() {
    const { control, formState: { errors }, handleSubmit } = useForm<IUsuario>();
    const navigation = useNavigation<any>();

    const onSubmit = async (data: IUsuario) => {
        data.cpf = Number(String(data.cpf).replace(/\D/g, ''));
        navigation.navigate('Senha', { usuario: data});
    }

    return (
        <MyScrollView>
            <View style={styles.container}>
                <Text style={registerStyle.title}>Dados pessoais</Text>
                <Text style={registerStyle.text}>Preencha suas informações pessoais para completar o cadastro</Text>

                <View style={styles.inputConteiner}>
                    <TextInputController
                        name="nome"
                        control={control}
                        style={{ width: '100%' }}
                        rules={{ required: 'Nome é obrigatório', minLenght: { value: 4, message: 'O nome deve conter pelo menos 4 caracteres' } }}
                        placeholder="Nome completo"
                    />
                    {errors.nome && <Text style={styles.error}>{errors.nome.message}</Text>}
                </View>

                <View style={styles.inputConteiner}>
                    <TextInputController
                        name="email"
                        control={control}
                        rules={{ required: 'E-mail é obrigatório' }}
                        placeholder="E-mail"
                    />
                    {errors.email && <Text style={styles.error}>{errors.email.message}</Text>}
                </View>

                <View style={styles.inputConteiner}>
                    <TextInputMaskController
                        typeMask="cpf"
                        name="cpf"
                        control={control}
                        rules={{ required: 'CPF é obrigatório' }}
                        placeholder="CPF"
                    />
                    {errors.cpf && <Text style={styles.error}>{errors.cpf.message}</Text>}
                </View>

                <View style={styles.inputConteiner}>
                    <DateInputController
                        name="data_nascimento"
                        control={control}
                        rules={{ required: 'Data de nascimento é obrigatório' }}
                        placeholder="Data de nascimento"
                    />
                    {errors.data_nascimento && <Text style={styles.error}>{errors.data_nascimento.message}</Text>}
                </View>

                <MyButton title="Continuar" style={registerStyle.button} onPress={handleSubmit(onSubmit)} />
            </View>
        </MyScrollView>
    );
};
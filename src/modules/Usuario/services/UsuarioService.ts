import ApiIJob from "../../../core/infra/ApiIJob";
import { IUsuario } from "../Models/IUsuario";

class UsuarioService {
    async cadastrar(usuario: IUsuario): Promise<IUsuario> {
        const response = await ApiIJob.post('/usuarios', usuario)
        return response.data.content;
    }
}

export default new UsuarioService();
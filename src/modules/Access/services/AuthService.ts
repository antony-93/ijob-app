import { AuthData } from "../../../core/context/Auth";
import ApiIJob from "../../../core/infra/ApiIJob";

class AuthService {
    async autenticar(authDto: { email: string, senha: string }): Promise<AuthData> {
        const response = await ApiIJob.post('/usuarios/authenticate', {
            email: authDto.email,
            senha: authDto.senha
        })
    
        return response.data;
    }
}

export default new AuthService();
import { IEndereco } from "../../Endereco/Models/IEndereco";

export interface IUsuario {
    nome: string;
    
    email: string;
    
    cpf: number;
    
    data_nascimento: Date;

    senha: string;

    endereco: IEndereco[];

    confirmarSenha?: string;
}
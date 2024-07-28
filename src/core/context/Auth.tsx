import { createContext, FC, ReactNode, useContext, useState } from "react";
import AuthService from "../../modules/Access/services/AuthService";
import { IUsuario } from "../../modules/Usuario/Models/IUsuario";

export interface AuthData {
    token: string;
    usuario: IUsuario;
}

interface AuthContextData {
    authData?: AuthData;
    autenticar: (authDto: { email: string, senha: string }) => Promise<AuthData>;
    signOut: () => Promise<void>;
}

interface AuthProviderProps {
    children: ReactNode;
}

export const AuthContext = createContext<AuthContextData>(
    {} as AuthContextData
);

export const AuthProvider: FC<AuthProviderProps> = ({children}) => {
    const [authData, setAuthData] = useState<AuthData>();
    
    async function autenticar(authDto: { email: string, senha: string }): Promise<AuthData> {
        const auth = await AuthService.autenticar(authDto);

        setAuthData(auth);

        return auth;
    }

    async function signOut(): Promise<void> {
        setAuthData(undefined);
        return;
    }

    return (
        <AuthContext.Provider value={{authData, autenticar, signOut}}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() { 
    const context = useContext(AuthContext);
    return context;
}
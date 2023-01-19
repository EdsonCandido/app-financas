import localforage from "localforage";
import { createContext, useCallback, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { https } from "../configs/http";

interface User{
    id: number;
    name: string;
    document: string;
    type: number
}

interface AuthState {
    token: string;
    user: User;
}
interface SignInCredentials{
    email: string;
    password: string;
}
interface AuthContextData{
    user: User;
    signIn(credentials: SignInCredentials): Promise<void>;
    signOut(): void;
    passRecovery(user: User, newPassword: string): Promise<void>;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider = ({children}: any) => {
    const navigate = useNavigate();

    const [data, setData] = useState<AuthState>(() => {
        const token =  localStorage.getItem('@_token')
        const user =  localStorage.getItem('@_user');

        if(token && user){
            https.defaults.headers['Authorization'] = `Bearer ${token}`
            return {user: JSON.parse(user), token};
        }

        return {} as AuthState;
    });

    const signIn = useCallback(async ({email, password}: SignInCredentials) => {
        try {
            const response = await https.post(``, data)
            const {token, user} = response.data;   
    
            if(token) https.defaults.headers['Authorization'] = `Bearer ${token}`;
    
            setData({token, user});
            
            toast.success('Login realizado com sucesso', {
                theme: "colored",
                closeOnClick: true,
                position: "top-right",
                autoClose: 3000,
            });

        } catch (error: any) {
            throw new Error(error.response.data.err);
        }
    }, [data])

    const signOut = useCallback(()=> {
        localStorage.removeItem('@_token');
        localStorage.removeItem('@_user');

        setData({} as AuthState);

        navigate('/login');
    }, [navigate]);

    const passRecovery = useCallback(async  (user:User, newPassword: string)=> {

    }, [])
    return (
        <AuthContext.Provider value={{passRecovery, signIn, signOut, user: data.user}}>
            {children}
        </AuthContext.Provider>
    );
}

function useAuth() {
    const context = useContext(AuthContext);

    if(!context)
        throw new Error("useAuth must be used within an AuthProvider");
    return context;
}

export {AuthProvider, useAuth}
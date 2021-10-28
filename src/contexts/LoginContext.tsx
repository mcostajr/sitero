import { signIn } from "next-auth/client";
import { createContext, ReactNode, useState } from "react";

type SignInType = {
    username: string;
    password: string;
}

type LoginProviderType = {
    children: ReactNode;
}

type LoginContextType = {
    invalidCredential: boolean,
    handleSignIn: ({username, password}: SignInType) => void,
}

export const LoginContext = createContext({} as LoginContextType);

export default function LoginProvider({children}: LoginProviderType) {

    const [ invalidCredential, setInvalidCredential ] = useState(false);

    async function handleSignIn({username, password}: SignInType) {
      const res = await signIn('credentials', { redirect: false, username: username, password: password })
      
      if(res?.error == "CredentialsSignin") {
        setInvalidCredential(true);
      }
    }

    return (
        <LoginContext.Provider 
            value={{
                invalidCredential,
                handleSignIn
            }}
        >
            {children}
        </LoginContext.Provider>
    )
}
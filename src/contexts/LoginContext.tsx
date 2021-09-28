import { useSession } from "next-auth/client";
import { createContext, ReactNode, useEffect, useState } from "react";

type User = {
    name?: string | null | undefined;
    email?: string | null | undefined;
    image?: string | null | undefined;
}

type LoginProviderType = {
    children: ReactNode;
}

type LoginContextType = {
    user: User | null;
}

export const LoginContext = createContext({} as LoginContextType);

export default function LoginProvider({children}: LoginProviderType) {

    const [session, loading] = useSession()

    const [ user, setUser ]= useState<User | null>(session?.user ?? null)

    useEffect(() => {
        setUser(session?.user as User ?? null)
    },[session])

    return (
        <LoginContext.Provider 
            value={{
                user
            }}
        >
            {children}
        </LoginContext.Provider>
    )
}
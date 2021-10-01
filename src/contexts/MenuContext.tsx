import { createContext, ReactNode, useEffect, useState } from "react";


type MenuProviderType = {
    children: ReactNode;
}

type MenuContextType = {
    open: boolean,
    toggleMenu: () => void,
    openLogin: boolean,
    toggleMenuLogin: () => void,
    handleClickOutside: (divRef: React.RefObject<HTMLDivElement>, event: any) => void
}

export const MenuContext = createContext({} as MenuContextType);

export default function MenuProvider({children}: MenuProviderType) {

    const [ open, setOpen ] = useState(false)
    const [ openLogin, setOpenLogin ] = useState(false)

    function toggleMenu() {
        setOpen(!open)
    }

    function toggleMenuLogin() {
        setOpenLogin(!openLogin)
    }
    
    function handleClickOutside(divRef: React.RefObject<HTMLDivElement> , event: any) {
        if (divRef.current && !divRef.current.contains(event.target)){
            openLogin && toggleMenuLogin()
            open && toggleMenu()
        }
    }

    return (
        <MenuContext.Provider 
            value={{
                open,
                toggleMenu,
                openLogin,
                toggleMenuLogin,
                handleClickOutside
            }}
        >
            {children}
        </MenuContext.Provider>
    )
}
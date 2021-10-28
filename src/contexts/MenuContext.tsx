import { createContext, ReactNode, useEffect, useState } from "react";


type MenuProviderType = {
    children: ReactNode;
}

type MenuContextType = {
    openMenu: boolean,
    toggleMenu: () => void,
    openArrow: boolean,
    toggleArrow: () => void,
    handleClickOutside: (divRef: React.RefObject<HTMLDivElement>, event: any) => void
}

export const MenuContext = createContext({} as MenuContextType);

export default function MenuProvider({children}: MenuProviderType) {

    const [ openMenu, setOpenMenu ] = useState(false)
    const [ openArrow, setOpenArrow ] = useState(false)

    function toggleMenu() {
        setOpenMenu(!openMenu)
    }

    function toggleArrow() {
        setOpenArrow(!openArrow)
    }
    
    function handleClickOutside(divRef: React.RefObject<HTMLDivElement> , event: any) {
        if (divRef.current && !divRef.current.contains(event.target)){
            openMenu && toggleMenu()
            openArrow && toggleArrow()
        }
    }

    return (
        <MenuContext.Provider 
            value={{
                openMenu,
                toggleMenu,
                openArrow,
                toggleArrow,
                handleClickOutside
            }}
        >
            {children}
        </MenuContext.Provider>
    )
}
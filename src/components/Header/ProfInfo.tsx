import { useSession } from "next-auth/client";
import { useContext, useState } from "react";
import Image from 'next/image';
import { AiOutlineDown } from "react-icons/ai";

import { MenuContext } from "../../contexts/MenuContext";
import DropDownLogin from "../DropDownLogin";
import DropDownOptions from "../DropDownOptions";

import styles from './styles.module.scss'

export default function ProfInfo() {
  
    const [session, loading] = useSession();
    const { openArrow, toggleArrow } = useContext(MenuContext)
    const [ openLogin, setOpenLogin] = useState(false)
  
    return (
      <div className={styles.loginContainer}>
        {!session ? 
             (
              <>
                <button className={styles.button} onClick={toggleArrow}>Entrar</button>
                {openArrow && <DropDownLogin/>}
              </>
             )
            : 
            (
              <div className={styles.loginWrapper}>
                <div className={styles.avatar}>
                  <Image 
                      src="/avatar.jpg"
                      alt="photo"
                      width="50px"
                      height="50px"
                  />
                </div>
                <span>{session ? session.user.name : 'Visitante'}</span>
        
                <div>
                  <div className={styles.buttonDropDownLogin} onClick={() => toggleArrow()}>
                    <AiOutlineDown size={15}/>
                  </div>
                </div>
                
                {openArrow && <DropDownOptions/>}
              </div>
            )}
      </div>
    )
  }
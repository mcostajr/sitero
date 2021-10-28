import { signOut, useSession } from "next-auth/client";
import Link from 'next/link';
import { useContext, useEffect, useRef } from "react";
import { FaUserAlt, FaWallet, FaUsers, FaTicketAlt, FaSignOutAlt } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { MenuContext } from "../../contexts/MenuContext";

import styles from './styles.module.scss';

export default function DropDownOptions() {

  const { handleClickOutside } = useContext(MenuContext)

  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.addEventListener("mousedown", (e) => handleClickOutside(divRef, e));

    return () => {
      document.removeEventListener("mousedown", (e) => handleClickOutside(divRef, e));
    }
  })

  return (
    <div className={styles.container} ref={divRef}>
      <div className={styles.optionList}>
        <div>
          <FaUserAlt/>
          <Link href="/profile"><span>Meu Perfil</span></Link>
        </div>
          <Link href="/profile/edit" >
        <div>
            <RiLockPasswordFill/>
            <span>Trocar Senha</span>
        </div>
          </Link>
        <div>
          <FaWallet/>
          <Link href="/profile/wallet"><span>Minha Carteira</span></Link>
        </div>
        <div>
          <FaUsers/>
          <Link href="/profile/character"><span>Meus Personagens</span></Link>
        </div>
        <div>
          <FaTicketAlt/>
          <Link href="/profile/ticket"><span>Abrir Ticket</span></Link>
        </div>
        <div>
          <FaSignOutAlt/>
          <span className={styles.buttonSingOut} onClick={() => signOut()}>Sing Out</span>
        </div>
      </div>
    </div>
  )
}
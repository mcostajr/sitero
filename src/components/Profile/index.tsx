import { signOut } from "next-auth/client";
import { useContext } from "react";
import Link from 'next/link';

import { LoginContext } from "../../contexts/LoginContext";
import styles from './styles.module.scss';
import { FaRegUserCircle } from "react-icons/fa";

export default function Profile() {

    const { user } = useContext(LoginContext);
  
    return (
      <div className={styles.container}>
        <div>
          <FaRegUserCircle className={styles.avatar}/>
          <span>{user?.name}</span>
        </div>
        <nav>
          <Link href="/profile"><a>Editar Perfil</a></Link>
          <Link href="/reset"><a>Trocar Senha</a></Link>
        </nav>
        <button className={styles.buttonSingOut} onClick={() => signOut()}>Sing Out</button>
      </div>
    )
  }
import { signOut } from "next-auth/client";
import { useContext } from "react";
import Link from 'next/link';

import { LoginContext } from "../../contexts/LoginContext";
import styles from './styles.module.scss';

export default function Profile() {

    const { user } = useContext(LoginContext);
  
    return (
      <div className={styles.container}>
        <span>{user?.name}</span>
        <Link href="/reset"><a>Trocar Senha</a></Link>
        <button className={styles.buttonSingOut} onClick={() => signOut()}>Sing Out</button>
      </div>
    )
  }
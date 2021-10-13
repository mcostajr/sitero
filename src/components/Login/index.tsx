import React, { useState } from "react";
import Link from 'next/link';
import { signIn } from "next-auth/client";
import { useForm } from "react-hook-form";

import styles from './styles.module.scss'

type IFormInput = {
  username: string;
  password: string;
}

export default function Login() {
  const { register, handleSubmit } = useForm();
  const [ invalidCredential, setInvalidCredential ] = useState(false);

  async function handleSignIng({username, password}: IFormInput) {
    const res = await signIn('credentials', { redirect: false, username: username, password: password })
    
    if(res?.error == "CredentialsSignin") {
      setInvalidCredential(true);
    }

  }

  return (
    <form className={styles.container} onSubmit={handleSubmit(handleSignIng)}>
      {invalidCredential && 
        <div className={styles.credencialInvalid}>
          <span>Credencial Invalida, verifique se você digitou as informações corretas e tente novamente.</span>
        </div>
      }
      <div className={styles.information}>
        <input {...register('username')} type="text" placeholder='Username'/>
        <input {...register('password')} type="password" placeholder='Password' />
      </div>
      <div className={styles.register}>
        <Link href="/"><a>Esqueci senha</a></Link>
        <Link href="/register"><a>Cadastrar-se</a></Link>
      </div>
      <button>Login</button>
    </form>
  )
}
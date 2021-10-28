import React, { useContext, useEffect, useRef, useState } from "react";
import Link from 'next/link';

import { useSession } from "next-auth/client";
import { useForm } from "react-hook-form";

import { LoginContext } from "../../contexts/LoginContext";
import { MenuContext } from "../../contexts/MenuContext";
import styles from './styles.module.scss'

export default function DropDownLogin() {

  const { invalidCredential, handleSignIn } = useContext(LoginContext);
  const { handleClickOutside } = useContext(MenuContext);
  const { register, handleSubmit } = useForm();
  
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.addEventListener("mousedown", (e) => handleClickOutside(divRef, e));

    return () => {
      document.removeEventListener("mousedown", (e) => handleClickOutside(divRef, e));
    }
  })
  
  return (
    <div className={styles.container} ref={divRef}>
      <form className={styles.wrapper} onSubmit={handleSubmit(handleSignIn)}>
        {invalidCredential && 
          <div className={styles.credencialInvalid}>
            <span>Credencial Invalida, verifique se você digitou as informações corretas e tente novamente.</span>
          </div>
        }
        <input {...register('username')} type="text" placeholder='Username'/>
        <input {...register('password')} type="password" placeholder='Password' />
        <div className={styles.register}>
          <Link href="/"><a>Esqueci senha</a></Link>
          <Link href="/register"><a>Cadastrar-se</a></Link>
        </div>
        <button>Login</button>
      </form>
    </div>
  )
}
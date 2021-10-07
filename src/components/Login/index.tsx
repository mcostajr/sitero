import { signIn } from "next-auth/client";
import { useState } from "react";
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
          <div className={styles.userWrapper}>
              <span>Login</span>
              <input {...register('username')} type="text" placeholder='Username'/>
          </div>
          <div className={styles.passWrapper}>
              <span>Senha</span>
              <input {...register('password')} type="password" placeholder='Password' />
          </div>
      </div>
      <div className={styles.buttons}>
          <a href="">Esqueci senha</a>
          <input type="submit" value="Login"/>
      </div>
    </form>
  )
}
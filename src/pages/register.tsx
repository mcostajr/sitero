import Head from 'next/head';
import Image from 'next/image';
import { useForm, SubmitHandler } from 'react-hook-form'
import { api } from '../services/axios';

import styles from '../styles/Register.module.scss'
import { useState } from 'react';
import Router from 'next/router';

type IFormInput = {
    username: string;
    password: string;
    email: string;
}

export default function Register() {

    const [ userAvaible, setuserAvaible ] = useState(false);
    const [ passAvaible, setpassAvaible ] = useState(false);
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit: SubmitHandler<IFormInput> = async ({username, password, email}) => {
        
        if(userAvaible && passAvaible) {
            try {
                await api.post('/account', {
                    username: username,
                    password: password,
                    email: email
                })

                Router.push('/download');
                
            }catch(err) {
                console.log('Algum erro')
            }
        } else {
            if(!userAvaible) {
                console.log('Username Invalido')
            }
            if(!passAvaible) {
                console.log('Senha Invalido')
            }
        }
    }

    async function onChangeUsername(event: React.ChangeEvent<HTMLInputElement>) {
        const login = event.target.value

        if(login.length > 3) {
            
            // await api.get('/account', { 
            //     params: {
            //         username: login
            //     }
            // })

            setuserAvaible(true)
        } else {
            setuserAvaible(false)
        }
    }

    async function onChangePassword(event: React.ChangeEvent<HTMLInputElement>) {
        const password = event.target.value

        if(password.length > 5) {
            setpassAvaible(true)
        } else {
            setpassAvaible(false)
        }
    }

    return (
        <main className={styles.container}>
            <Head>
                <title>SiteRO | Registrar</title>
            </Head>
            <div className={styles.background}>
                <div className={styles.wrapper}>
                    <h2>REGISTRO</h2>
                    <div className={styles.registerContainer}>
                        <form onSubmit={handleSubmit(onSubmit)} className={styles.registerForm}>
                            <input 
                                {...register('username')} 
                                type="text"  
                                onChange={onChangeUsername}
                                minLength={4}
                                maxLength={23}
                                placeholder="Username"
                            />
                            <input 
                                {...register('password')} 
                                type="password" 
                                onChange={onChangePassword} 
                                minLength={8}
                                maxLength={32}
                                placeholder="Senha"
                            />
                            <input 
                                {...register('password')} 
                                type="password" 
                                onChange={onChangePassword} 
                                minLength={8}
                                maxLength={32}
                                placeholder="Confirmar Senha"
                            />
                            <input 
                                {...register('email')} 
                                type="email" 
                                placeholder="Email"
                            />
                            <div className={styles.checkService}>
                                <input type="checkbox" name="servico" id="servico" />
                                <span>Confirmar <a>Termos de Serviços</a>.</span>
                            </div>
                            <input className={styles.registerButton} type="submit" value="CRIAR MINHA CONTA" />
                        </form>
                        <Image 
                            src="/surtr.png"
                            alt="surt"
                            width={500}
                            height={500}
                        />
                    </div>
                </div>
            </div>
        </main>
    )
}
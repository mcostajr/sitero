import Head from 'next/head'
import Image from 'next/image'
import Router from 'next/router'
import { useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { GiConfirmed, GiCancel } from 'react-icons/gi'

import { api } from '../services/axios'
import styles from '../styles/Register.module.scss'

type FormInput = {
    username: string;
    password: string;
    email: string;
}

export default function Register() {
    
    const [ password, setPassword ] = useState('');
    const [ userAvaible, setuserAvaible ] = useState(false);
    const [ passAvaible, setpassAvaible ] = useState(false);
    const [ confirmPassAvaible, setconfirmPassAvaible ] = useState(false);
    const [ confirmTerms, setconfirmTerms ] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit: SubmitHandler<FormInput> = async ({username, password, email}) => {
        
        if(userAvaible && passAvaible && confirmPassAvaible) {
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
            if(!userAvaible || !passAvaible || !confirmPassAvaible) {
                alert('Credenciais Invalidas')
            }
        }
    }

    async function onChangeUsername(event: React.ChangeEvent<HTMLInputElement>) {
        const login = event.target.value

        console.log(confirmTerms)
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
        const minCharacter = 5
        const regularExpression = /[#?!@$%^&*-]/;

        setPassword(password)
        if (password.length < minCharacter) {
            setpassAvaible(false)
        } else if (password.search(/[A-Z]/) < 0) {
            setpassAvaible(false)
        } else if (password.search(/[0-9]/) < 0) {
            setpassAvaible(false)
        } else if (password.search(regularExpression) < 0) {
            setpassAvaible(false)
        } else {
            setpassAvaible(true)
        }
    }

    async function onConfirmPassword(event: React.ChangeEvent<HTMLInputElement>) {
        const confirmPassword = event.target.value

        if(confirmPassword === password) {
            setconfirmPassAvaible(true)
        } else {
            setconfirmPassAvaible(false)
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
                            <div className={styles.input}>
                                <input 
                                    {...register('username')} 
                                    type="text"  
                                    onChange={onChangeUsername}
                                    minLength={4}
                                    maxLength={23}
                                    placeholder="Username"
                                />
                                {userAvaible ? <GiConfirmed/> : <GiCancel/>}
                            </div>
                            <div className={styles.input}>
                                <input 
                                    {...register('password')} 
                                    type="password" 
                                    onChange={onChangePassword} 
                                    minLength={8}
                                    maxLength={32}
                                    placeholder="Senha"
                                />
                                {passAvaible ? <GiConfirmed/> : <GiCancel/>}
                            </div>
                            <div className={styles.input}>
                                <input 
                                    type="password" 
                                    onChange={onConfirmPassword} 
                                    minLength={8}
                                    maxLength={32}
                                    placeholder="Confirmar Senha"
                                />
                                {confirmPassAvaible ? <GiConfirmed/> : <GiCancel/>}
                            </div>
                            <div className={styles.input}>
                                <input 
                                    {...register('email')} 
                                    type="email" 
                                    placeholder="Email"
                                />
                            </div>
                            <div className={styles.checkService}>
                                <input type="checkbox" name="servico" id="servico" onChange={() => setconfirmTerms(!confirmTerms)}/>
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
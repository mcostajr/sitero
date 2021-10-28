import Head from 'next/head'
import Image from 'next/image'
import Router from 'next/router'
import { useEffect, useState } from 'react'
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
    const [ confirmPassword, setconfirmPassword ] = useState('');
    const [ userAvaible, setuserAvaible ] = useState(false);
    const [ passAvaible, setpassAvaible ] = useState(false);
    const [ confirmPassAvaible, setconfirmPassAvaible ] = useState(false);
    const [ confirmTerms, setconfirmTerms ] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit: SubmitHandler<FormInput> = async ({username, password, email}) => {

        if(userAvaible && passAvaible && confirmPassAvaible && confirmTerms) {
            api.post('/user/create', {
                username: username,
                password: password,
                email: email
            }).then(() => {
                Router.push('/download');
            }).catch(() => {
                setuserAvaible(false);
            })

        } else {
            if(!userAvaible || !passAvaible || !confirmPassAvaible) {
                alert('Credenciais Invalidas')
            } else if (!confirmTerms){
                alert('Termos não aceitos')
            }
        }
    }

    function onChangeUsername(event: React.ChangeEvent<HTMLInputElement>) {
        const login = event.target.value

        if(login.length > 3) {
            setuserAvaible(true)
        } else {
            setuserAvaible(false)
        }
    }

    function onChangePassword(event: React.ChangeEvent<HTMLInputElement>) {
        setPassword(event.target.value);
    }

    function onChangeConfirmPasswor(event: React.ChangeEvent<HTMLInputElement>) {
        setconfirmPassword(event.target.value)
    }

    useEffect(() => {

        const minCharacter = 5
        const regularExpression = /[#?!@$%^&*-]/;

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

        if(confirmPassword === password && passAvaible) {
            setconfirmPassAvaible(true)
        } else {
            setconfirmPassAvaible(false)
        }

    },[password,confirmPassword])

    return (
        <>
            <Head>
                <title>SiteRO | Registrar</title>
            </Head>
            <main className={styles.container}>
                <div className={styles.background}>
                    <div className={styles.wrapper}>
                        <h2>REGISTRO</h2>
                        <div className={styles.registerContainer}>
                            <form onSubmit={handleSubmit(onSubmit)} className={styles.registerForm}>
                                <div className={styles.text}>
                                    <input 
                                        {...register('username')} 
                                        type="text"  
                                        onChange={onChangeUsername}
                                        minLength={4}
                                        maxLength={23}
                                        placeholder="Username"
                                    />
                                    <div className={styles.avaible}>{userAvaible ? <GiConfirmed/> : <GiCancel/>}</div>
                                </div>
                                <div className={styles.text}>
                                    <input 
                                        {...register('password')} 
                                        type="password" 
                                        onChange={onChangePassword} 
                                        minLength={8}
                                        maxLength={32}
                                        placeholder="Senha"
                                    />
                                    <div className={styles.avaible}>{passAvaible ? <GiConfirmed/> : <GiCancel/>}</div>
                                </div>
                                <div className={styles.text}>
                                    <input 
                                        type="password" 
                                        onChange={onChangeConfirmPasswor} 
                                        minLength={8}
                                        maxLength={32}
                                        placeholder="Confirmar Senha"
                                    />
                                    <div className={styles.avaible}>{confirmPassAvaible ? <GiConfirmed/> : <GiCancel/>}</div>
                                </div>
                                <div className={styles.text}>
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
        </>
    )
}
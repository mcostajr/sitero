import { useForm, SubmitHandler } from 'react-hook-form'
import { api } from '../services/axios';

import styles from '../styles/Register.module.scss'
import { useState } from 'react';

type IFormInput = {
    username: string;
    password: string;
    email: string;
}

export default function Register() {

    const [ userAvaible, setuserAvaible ] = useState(false);
    const [ passAvaible, setpassAvaible ] = useState(false);
    const [ accountCreate, setAccountCreate ] = useState(false);
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit: SubmitHandler<IFormInput> = async ({username, password, email}) => {
        
        if(userAvaible && passAvaible) {
            try {
                await api.post('/account', {
                    username: username,
                    password: password,
                    email: email
                })

                setAccountCreate(true);
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
        <div className={styles.container}>
            {accountCreate? (
                <div>
                    <h1>Account Created</h1>
                    <a onClick={() => setAccountCreate(false)}>Realizar outro cadastro</a>
                </div>
            )
            : 
            (
                <form onSubmit={handleSubmit(onSubmit)} className={styles.registerForm}>
                    <h2>Registrar</h2>
                    <div>
                        <span>Username</span>
                        <div>
                            <input 
                                {...register('username')} 
                                type="text"  
                                onChange={onChangeUsername}
                                minLength={4}
                                maxLength={23}
                            />
                        </div>

                        <span>Password</span>
                        <div>
                            <input 
                                {...register('password')} 
                                type="password" 
                                onChange={onChangePassword} 
                                minLength={8}
                                maxLength={32}
                            />
                        </div>
                        <span>Email</span>
                        <input {...register('email')} type="email" />
                    </div>
                    <input type="submit" value="Registrar" />
                </form>
            )}
        </div>
    )
}
import { GetServerSideProps } from 'next'
import { getSession } from 'next-auth/client'
import Profile, { ProfileProps } from '..'
import styles from './styles.module.scss'


export default function Edit({player}: ProfileProps) {
    return (
        <Profile player={player}>
            <div className={styles.container}>
                <div className={styles.wrapper}>
                    <div className={styles.subwrapper}>
                    <div className={styles.custom}>
                        <h3>Alterar Email</h3>
                        <form>
                            <input type="email" name="email" id="email" placeholder="Novo Email"/>
                            <button className={styles.button}>Alterar Email</button>
                        </form>
                    </div>
                    <div className={styles.custom}>
                        <h3>Alterar senha</h3>
                        <form>
                            <input type="password" name="oldpass" placeholder="Senha Atual"/>
                            <input type="password" name="newpass" placeholder="Nova Senha" />
                            <input type="password" name="confirmnewpass" placeholder="Confirma Senha" />
                            <button className={styles.button}>Alterar Senha</button>
                        </form>
                    </div>
                    </div>
                </div>
            </div>
        </Profile>
    )
}


export const getServerSideProps: GetServerSideProps = async (ctx) => {

    const session = await getSession(ctx)

    const player = session?.user

    if(!session) {
        return {
            redirect: {
                destination: '/',
                permanent: false
            }
        }
    }

    return { 
        props: {
            player
        }
    }
}
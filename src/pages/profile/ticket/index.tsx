import { GetServerSideProps } from 'next';
import { getSession } from 'next-auth/client';
import Profile, { ProfileProps } from '..';
import styles from './styles.module.scss'

export default function Ticket({player}: ProfileProps) {
    return (
        <Profile player={player}>
            <div className={styles.container}>
                <h3>Ticket</h3>
                <p>Escreva o mais detalhado possivel, para podermos sanar ou solucionar sua duvida.</p>
                <div className={styles.wrapper}>
                    <form>
                        <input type="text" placeholder="Titulo"/>
                        <input type="text" placeholder="Sobre" />
                        <textarea name="message" cols={30} rows={10} placeholder="Texto"></textarea>
                        <button className={styles.button}>Enviar</button>
                    </form>
                </div>
            </div>
        </Profile>
    )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {

    const session = await getSession(ctx);

    const player = session?.user;

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
            player,
        }
    }
}
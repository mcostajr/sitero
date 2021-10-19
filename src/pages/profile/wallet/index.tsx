import { GetServerSideProps } from 'next'
import { getSession } from 'next-auth/client'
import Profile, { ProfileProps } from '..'
import styles from './styles.module.scss'

export default function Wallet({player}: ProfileProps) {
    return (
        <Profile player={player}>
            <div className={styles.container}>
                <div className={styles.wrapper}>
                    <div className={styles.subwrapper}>
                        Wallet
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
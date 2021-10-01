import { GetServerSideProps } from "next"
import { getSession } from "next-auth/client";

import styles from '../styles/Profile.module.scss';

type Player = {
    name: string
}

type ProfileProps = {
    player: Player
}

export default function Profile({player}: ProfileProps) {
    
    return (
        <div className={styles.container}>
            <section className={styles.subHeader}>
                <div className={styles.profile}>
                    <img src="" alt="" />
                    <h1>{player?.name}</h1>
                </div>
            </section>
            <section className={styles.wrapper}>
            </section>
        </div>
    )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {

    try {
        const session = await getSession(ctx)

        const player = session?.user as Player

        return { 
            props: {
                player
            }
        }
    }catch(err) {
        return {
            redirect: {
                permanent: true,
                destination: '/',
            }
        }
    }
}
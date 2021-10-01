import Head from 'next/head';
import { GetStaticProps } from 'next'
import { PrismaClient } from '@prisma/client'

import styles from '../styles/Ranking.module.scss'
import { api } from '../services/axios'

type Player = {
    char_id: number;
    name: string;
    class: number;
    base_level: number;
    job_level: number;
    zeny: number;
}

type RankingType = {
    players: Player[];
}

export default function Ranking({ players }: RankingType) {

    return (
        <div className={styles.container}>
            <Head>
                <title>SiteRO | Ranking</title>
            </Head>
            <h1>Ranking</h1>
            <ul className={styles.leaderboard}>
                <li className={styles.leaderboardHead}>
                    <div className={styles.position}>
                        <span>Position</span>
                    </div>
                    <div className={styles.name}>
                        <span>Name</span>
                    </div>
                    <div className={styles.baseLevel}>
                        <span>Level</span>
                    </div>
                    <div className={styles.jobLevel}>
                        <span>Job</span>
                    </div>
                    <div className={styles.class}>
                        <span>Classe</span>
                    </div>
                </li>
                {players?.map((player,idx) => {
                    return (
                        <li className={styles.leaderboardItem} key={player.char_id}>
                            <div className={styles.position}>
                                <span>{idx+1}</span>
                            </div>
                            <div className={styles.name}>
                                <span>{player.name}</span>
                            </div>
                            <div className={styles.baseLevel}>
                                <span>{player.base_level}</span>
                            </div>
                            <div className={styles.jobLevel}>
                                <span>{player.job_level}</span>
                            </div>
                            <div className={styles.class}>
                                <span>{className(player.class)}</span>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

function className(classId: number) {

    const name = ['Estudante', 'Genin','Chunin','Jounin']
    
    return name[classId]
}


export const getStaticProps: GetStaticProps = async () => {
    
    try {
        const { data } = await api.get('ranking')
        const players = data;

        return {
            props: {
                players
            },
            revalidate: 60 * 1 //1m
        }
    } catch(err) {
        
    }

    return {
        props: {

        }
    }
}
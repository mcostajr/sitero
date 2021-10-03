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
            <table className={styles.leaderboard}>
                <th className={styles.leaderboardHeader}>
                    <td className={styles.position}>
                        <span>Position</span>
                    </td>
                    <td className={styles.name}>
                        <span>Name</span>
                    </td>
                    <td className={styles.baseLevel}>
                        <span>Level</span>
                    </td>
                    <td className={styles.jobLevel}>
                        <span>Job</span>
                    </td>
                    <td className={styles.class}>
                        <span>Classe</span>
                    </td>
                </th>
                {players?.map((player,idx) => {
                    return (
                        <tr className={styles.leaderboardItem} key={player.char_id}>
                            <td className={styles.position}>
                                <span>{idx+1}</span>
                            </td>
                            <td className={styles.name}>
                                <span>{player.name}</span>
                            </td>
                            <td className={styles.baseLevel}>
                                <span>{player.base_level}</span>
                            </td>
                            <td className={styles.jobLevel}>
                                <span>{player.job_level}</span>
                            </td>
                            <td className={styles.class}>
                                <span>{className(player.class)}</span>
                            </td>
                        </tr>
                    )
                })}
            </table>
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
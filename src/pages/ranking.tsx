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

    const ranking: Player[] = [
        { char_id: 1, name: 'Teste 1', class: 0, base_level: 100, job_level: 10, zeny: 100 },
        { char_id: 1, name: 'Teste 2', class: 0, base_level: 99, job_level: 10, zeny: 100 },
        { char_id: 1, name: 'Teste 3', class: 0, base_level: 98, job_level: 10, zeny: 100 },
        { char_id: 1, name: 'Teste 4', class: 0, base_level: 97, job_level: 10, zeny: 100 },
        { char_id: 1, name: 'Teste 5', class: 0, base_level: 96, job_level: 10, zeny: 100 },
        { char_id: 1, name: 'Teste 6', class: 0, base_level: 95, job_level: 10, zeny: 100 },
        { char_id: 1, name: 'Teste 7', class: 0, base_level: 94, job_level: 10, zeny: 100 },
        { char_id: 1, name: 'Teste 8', class: 0, base_level: 93, job_level: 10, zeny: 100 },
        { char_id: 1, name: 'Teste 9', class: 0, base_level: 92, job_level: 10, zeny: 100 },
        { char_id: 1, name: 'Teste 10', class: 0, base_level: 91, job_level: 10, zeny: 100 },
        { char_id: 1, name: 'Teste 11', class: 0, base_level: 90, job_level: 10, zeny: 100 },
        { char_id: 1, name: 'Teste 12', class: 0, base_level: 89, job_level: 10, zeny: 100 },
        { char_id: 1, name: 'Teste 13', class: 0, base_level: 88, job_level: 10, zeny: 100 },
        { char_id: 1, name: 'Teste 14', class: 0, base_level: 87, job_level: 10, zeny: 100 },
        { char_id: 1, name: 'Teste 15', class: 0, base_level: 86, job_level: 10, zeny: 100 },
        { char_id: 1, name: 'Teste 16', class: 0, base_level: 85, job_level: 10, zeny: 100 },
        { char_id: 1, name: 'Teste 17', class: 0, base_level: 84, job_level: 10, zeny: 100 },
        { char_id: 1, name: 'Teste 18', class: 0, base_level: 83, job_level: 10, zeny: 100 },
        { char_id: 1, name: 'Teste 19', class: 0, base_level: 83, job_level: 10, zeny: 100 },
        { char_id: 1, name: 'Teste 20', class: 0, base_level: 83, job_level: 10, zeny: 100 },
        { char_id: 1, name: 'Teste 21', class: 0, base_level: 83, job_level: 10, zeny: 100 },
        { char_id: 1, name: 'Teste 22', class: 0, base_level: 83, job_level: 10, zeny: 100 },
        { char_id: 1, name: 'Teste 23', class: 0, base_level: 83, job_level: 10, zeny: 100 },
        { char_id: 1, name: 'Teste 24', class: 0, base_level: 83, job_level: 10, zeny: 100 },
        { char_id: 1, name: 'Teste 25', class: 0, base_level: 83, job_level: 10, zeny: 100 },
        { char_id: 1, name: 'Teste 26', class: 0, base_level: 83, job_level: 10, zeny: 100 },
        { char_id: 1, name: 'Teste 27', class: 0, base_level: 83, job_level: 10, zeny: 100 },
        { char_id: 1, name: 'Teste 28', class: 0, base_level: 83, job_level: 10, zeny: 100 },
        { char_id: 1, name: 'Teste 29', class: 0, base_level: 83, job_level: 10, zeny: 100 },
        { char_id: 1, name: 'Teste 30', class: 0, base_level: 83, job_level: 10, zeny: 100 }
    ]

    !players.length ? players = ranking : players;

    return (
        <main className={styles.container}>
            <Head>
                <title>SiteRO | Ranking</title>
            </Head>
            <div className={styles.wrapper}>
                <h1>Ranking</h1>
                <div className={styles.subContainer}>
                    <nav className={styles.filter}>
                        <ul>
                            <li>Player Level</li>
                            <li>Player Zeny</li>
                            <li>Guild Level</li>
                        </ul>
                    </nav>
                    <ul className={styles.leaderboard}>
                        <li className={`${styles.leaderboardItems} ${styles.leaderboardHeader}`}>
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
                                <li className={`${styles.leaderboardItems} ${styles.leaderboardBody}`} key={player.char_id}>
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
            </div>
            <div className={styles.background}>
                <img src="ranking.png" alt="ranking" />
            </div>
        </main>
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
        return {
            props: {
                players: []
            }
        }
    }
}
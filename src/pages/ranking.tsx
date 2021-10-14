import { GetStaticProps } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { MdNavigateBefore, MdNavigateNext} from 'react-icons/md';

import { api } from '../services/axios';
import styles from '../styles/Ranking.module.scss';
import { className } from '../services/helper';

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
        { char_id: 1, name: 'Teste 1', class: 1, base_level: 100, job_level: 10, zeny: 100 },
        { char_id: 1, name: 'Teste 2', class: 0, base_level: 99, job_level: 1, zeny: 100 },
        { char_id: 1, name: 'Teste 3', class: 0, base_level: 98, job_level: 1, zeny: 100 },
        { char_id: 1, name: 'Teste 4', class: 3, base_level: 97, job_level: 10, zeny: 100 },
        { char_id: 1, name: 'Teste 5', class: 0, base_level: 96, job_level: 1, zeny: 100 },
        { char_id: 1, name: 'Teste 6', class: 0, base_level: 95, job_level: 10, zeny: 100 },
        { char_id: 1, name: 'Teste 7', class: 0, base_level: 94, job_level: 10, zeny: 100 },
        { char_id: 1, name: 'Teste 8', class: 0, base_level: 93, job_level: 1, zeny: 100 },
        { char_id: 1, name: 'Teste 9', class: 0, base_level: 92, job_level: 10, zeny: 100 },
        { char_id: 1, name: 'Teste 10', class: 0, base_level: 91, job_level: 10, zeny: 100 }
    ]

    !players.length ? players = ranking : players;

    return (
        <main className={styles.container}>
            <Head>
                <title>SiteRO | Ranking</title>
            </Head>
            <div className={styles.background}>
                <div className={styles.wrapper}>
                    <h1>TABELA DE NIVEL</h1>
                    <div className={styles.subContainer}>
                        <nav className={styles.filter}>
                            <ul>
                                <li>Player Level</li>|
                                <li>Player Zeny</li>|
                                <li>Guild Level</li>
                            </ul>
                        </nav>
                        <ul className={styles.leaderboard}>
                            <li className={styles.leaderboardItems} >
                                <div>
                                    <span>Position</span>
                                </div>
                                <div>
                                    <span>Name</span>
                                </div>
                                <div>
                                    <span>Level</span>
                                </div>
                                <div>
                                    <span>Job</span>
                                </div>
                                <div>
                                    <span>Classe</span>
                                </div>
                            </li>
                            {players?.map((player,idx) => {
                                return (
                                    <li className={`${styles.leaderboardItems} ${styles.leaderboardBody}`} key={player.char_id}>
                                        <div>
                                            <span>{idx+1}</span>
                                        </div>
                                        <div>
                                            <span>{player.name}</span>
                                        </div>
                                        <div>
                                            <span>{player.base_level}</span>
                                        </div>
                                        <div>
                                            <span>{player.job_level}</span>
                                        </div>
                                        <div>
                                            <span>{className(player.class)}</span>
                                        </div>
                                    </li>
                                )
                            })}
                            
                        </ul>
                        <div className={styles.pages}>
                            <button><MdNavigateBefore/></button>
                            <div>
                                <span>1/100</span>
                            </div>
                            <button><MdNavigateNext/></button>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.photo}>
                <Image 
                    src="/spore.png"
                    alt="spore"
                    width="300px"
                    height="300px"
                />
            </div>
        </main>
    )
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
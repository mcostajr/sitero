import { GetStaticProps } from 'next'
import { PrismaClient } from '@prisma/client'

import styles from 'styles.module.scss'

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
        <div>
            <ul>
                {players?.map(player => {
                    return (
                        <li key={player.char_id}>
                            <span>{player.name}</span>
                            <span>{player.base_level}</span>
                        </li>
                    )
                })}
            </ul>
            <h1>Ranking</h1>
        </div>
    )
}

export const getStaticProps: GetStaticProps = async () => {
    
    const prisma = new PrismaClient();

    const data = await prisma.char.findMany()

    const players = data.map(player => {
        return {
            char_id: player.char_id,
            name: player.name,
            class: player.class,
            base_level: player.base_level,
            job_level: player.job_level,
            zeny: player.zeny
        }
    })

    return {
        props: {
            players
        }
    }
}
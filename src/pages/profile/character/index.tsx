import { GetServerSideProps } from "next";
import { getSession } from "next-auth/client"
import Image from 'next/image';
import { PrismaClient, Prisma } from '@prisma/client'

import Profile, { ProfileProps } from "..";
import { className } from "../../../services/helper";
import styles from './styles.module.scss'

type Character = {
    account_id: number;
    char_id: number;
    name: string;
    class: number;
    base_level: number;
    job_level: number;
    base_exp: number;
    job_exp: number;
    zeny: number;
    party_id: number;
    guild_id: number;
    hair: number;
    hair_color: number;
    clothes_color: number;
    body: number;
    head_top: number;
    head_mid: number;
    head_bottom: number;
    last_map: string;
    save_map: string;
    sex: string;
}

interface CharactersProps extends ProfileProps {
    characters: Character[];
}

type CharacterProps = {
    character: Character,
}

export default function Characters({player, characters}: CharactersProps) {

    return (
        <Profile player={player}>
            <div className={styles.container}>
            <div className={styles.wrapper}>
                {
                    characters?.length ?
                    <ul className={styles.characterList}>
                                {characters?.map(character => {
                                    return (
                                        <Character key={character.char_id} character={character}/>
                                        )
                                    })}
                            </ul>
                            :
                            <div>
                                <span>Nenhum Personagem encontrado</span>
                            </div>
                    }
                </div>
            </div>
        </Profile>
    )
}

function Character({character}: CharacterProps) {
    return (
        <li className={styles.character}>
            <div className={styles.photo} style={{backgroundImage: `url('/characters/dressroomback/dressroomback_0.bmp')`}}>
                <div className={styles.ref}>
                    <Image
                        src={`/characters/class/${character.class}/${character.sex}/${character.hair}.gif`} 
                        alt="character" 
                        layout="fill"
                        objectFit="scale-down"
                        className={styles.body}
                    />
                </div>
            </div>
            <div className={styles.info}>
                <span>{character.name}</span>
                <span>{className(character.class)}</span>
                <div>
                    <span>Base/Job: </span>
                    <span>{character.base_level}</span>/
                    <span>{character.job_level}</span>
                </div>
                <div>
                    <span>Base Exp/Job Exp: </span>
                    <span>{character.base_exp}</span>/
                    <span>{character.job_exp}</span>
                </div>
            </div>
        </li>
    )
}

const prisma = new PrismaClient();

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

    const data = await prisma.char.findMany({
        where: {
            account_id: Number(player?.account_id)
        }
    })

    const characters = data.map(character => {
        return {
            char_id: character.char_id,
            name: character.name,
            class: character.class,
            base_level: character.base_level,
            job_level: character.job_level,
            base_exp: Number(character.base_exp),
            job_exp: Number(character.job_exp),
            zeny: character.zeny,
            party_id: character.party_id,
            guild_id: character.guild_id,
            hair: character.hair,
            hair_color: character.hair_color,
            clothes_color: character.clothes_color,
            body: character.body,
            head_top: character.head_top,
            head_mid: character.head_mid,
            head_bottom: character.head_bottom,
            last_map: character.last_map,
            save_map: character.save_map,
            sex: character.sex,
        }
    })

    return { 
        props: {
            player,
            characters
        }
    }
}
import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient, Prisma } from '@prisma/client'

const prisma = new PrismaClient()

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    const { method } = req;
    const { account_id } = req.query;

    switch(method) {
        case 'GET':
            try {
                const data = await prisma.char.findMany({
                    where: {
                        account_id: Number(account_id)
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

                res.status(200).json(characters);
            } catch(err: any) {
                res.status(500).json({ message: err.message, status: false })
            }finally{
                await prisma.$disconnect() 
            }
            break;

        default:
            res.status(405).json({ message: 'Method not found' })
    }
}
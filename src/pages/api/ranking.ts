import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    const { method } = req;

    switch(method) {
        case 'GET':
            try {
                const data = await prisma.char.findMany({
                    orderBy: {
                        base_level: 'desc'
                    },
                    take: 100
                })

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

                res.status(200).json(players);
            } catch(err) {
                res.status(500).json({ statusCode: res.status, message: err })
            }finally{
                async () =>{ 
                    await prisma.$disconnect() 
                }
            }
            break;

        default:
            res.status(405).json({ message: 'Method not found' })
    }
}
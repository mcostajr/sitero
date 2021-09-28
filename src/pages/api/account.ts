import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    const { method } = req;
    const { username, password, email} = req.body;

    switch(method) {
        case 'POST':
            if(username.length < 4 || password < 8) break;

            await prisma.login.create({
                data: { 
                    userid: username,
                    user_pass: password,
                    email: email
                }
            })
            
            res.status(200).json({ message: 'account created' }) 
            
            break;

        case 'GET':
            const login = await prisma.login.findFirst({
                where: {
                    userid: String(req.query.username)
                }
            })
            res.send(login?.userid)
            break;

        default:
            res.status(405).json({ message: 'Method not found' })
    }
}
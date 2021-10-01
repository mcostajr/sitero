import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    const { method } = req;
    const { username, password, email} = req.body;

    switch(method) {
        case 'POST':
            try {
                if(username.length < 4 || password < 8) break;

                await prisma.login.create({
                    data: { 
                        userid: username,
                        user_pass: password,
                        email: email
                    }
                })
                
                res.status(200).json({ statusCode: res.status, message: 'account created' });
            }catch(err) {
                res.status(500).json({ statusCode: res.status, message: 'account invalid' })
            }finally {
                async () =>{ 
                  await prisma.$disconnect() 
                }
            }
            break;

        default:
            res.status(405).json({ message: 'Method not found' })
    }
}
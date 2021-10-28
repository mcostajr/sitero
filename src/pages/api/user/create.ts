import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    const { method } = req;

    if(method === 'POST') {
        const { username, password, email} = req.body;
        
        let account = await prisma.login.findFirst({
            where: { userid: username }
        })

        if(account)
            return res.status(400).json({message: 'Account already registered.'})
            
        account = await prisma.login.create({
            data: { 
                userid: username,
                user_pass: password,
                email: email
            }
        })
        
        return res.json({message: 'Account created.'});
    } else {
        return res.status(405).json({ message: 'Method not found' })
    }
}
import NextAuth from "next-auth"
import Providers from "next-auth/providers"
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import { PrismaClient } from '@prisma/client'
import { session } from "next-auth/client"

const prisma = new PrismaClient()

export default NextAuth({
  providers: [
    Providers.Credentials({
      name: 'Credentials',
      credentials: {
        username: { label: "Username", type: "text" },
        password: {  label: "Password", type: "password" }
      },
      async authorize(credentials) {
        try {
          const user = await prisma.login.findFirst({
            where: {
                userid: credentials.username,
                user_pass: credentials.password
            }
          })
  
          if (user) {
            return user
          } else {
            return null
          }
        }finally{
          async () =>{ 
            await prisma.$disconnect() 
          }
        }
      }
    }),
  ],
  // adapter: PrismaAdapter(prisma),
  callbacks: {
    jwt: async (token, user) => {
      if (user) {
        token.name = user.userid as string;
      }
      return token;
    },
  },
})
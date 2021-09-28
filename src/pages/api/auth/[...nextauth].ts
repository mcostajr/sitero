import NextAuth from "next-auth"
import Providers from "next-auth/providers"
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default NextAuth({
  providers: [
    Providers.Credentials({
      name: 'Credentials',
      credentials: {
        username: { label: "Username", type: "text" },
        password: {  label: "Password", type: "password" }
      },
      async authorize(credentials, req) {
        
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
      }
    })
  ],
  callbacks: {
    jwt: async (token, user) => {
      if (user) {
        token.name = user.userid as string;
      }
      return token;
    }
  },
})
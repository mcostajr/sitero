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
        }catch(err) {
          return null;
        }finally {
          await prisma.$disconnect();
        }
      }
    }),
  ],
  session: {
    maxAge: 60 * 60 * 24 // 1 Dia
  },
  callbacks: {
    async jwt(token, user, account) {
      if (user) {
        token.name = user.userid as string;
      }
      return token;
    },
  },
})
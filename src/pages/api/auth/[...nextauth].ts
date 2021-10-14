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
        const user = await prisma.login.findFirst({
          where: {
              userid: credentials.username,
              user_pass: credentials.password
          }
        })

        if (user) {
          return user
        }

        return null
      }
    }),
  ],
  session: {
    jwt: true,
  },
  callbacks: {
    async jwt(token, account) {
      if(account) {
        token.account_id = account.account_id as number
        token.name = account.userid as string
      }
      return token
    },
    async session(session, token) {
      session.user.account_id = token.account_id as number
      session.user.name = token.name as string
      return session
    },
  }
})
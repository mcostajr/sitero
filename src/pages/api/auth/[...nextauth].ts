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
    session: {
      // Use JSON Web Tokens for session instead of database sessions.
      // This option can be used with or without a database for users/accounts.
      // Note: `jwt` is automatically set to `true` if no database is specified.
      jwt: false,

      // Seconds - How long until an idle session expires and is no longer valid.
      maxAge: 30 * 24 * 60 * 60, // 30 days

      // Seconds - Throttle how frequently to write to database to extend a session.
      // Use it to limit write operations. Set to 0 to always update the database.
      // Note: This option is ignored if using JSON Web Tokens
      updateAge: 24 * 60 * 60, // 24 hours
    }
  },
})
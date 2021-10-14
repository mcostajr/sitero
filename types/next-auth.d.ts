import NextAuth from "next-auth"

declare module "next-auth" {
  interface Session {
    user: {
      account_id?: number,
      name?: string
    }
  }
}

declare module "next-auth/jwt" {
    interface JWT {
        account_id?: number
    }
  }
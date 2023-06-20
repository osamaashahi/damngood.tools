import { User as PrismaUser } from "@prisma/client"
import NextAuth, { DefaultSession } from "next-auth"

declare module "next-auth" {
    interface User {}

    interface Session {
        user: PrismaUser & DefaultSession["user"]
    }
}

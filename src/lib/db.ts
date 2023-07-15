import { PrismaClient } from "@prisma/client"

declare global {
    // eslint-disable-next-line no-var
    var cachedPrisma: PrismaClient
}

let prisma: PrismaClient
if (process.env.NODE_ENV === "production") {
    prisma = new PrismaClient()
} else {
    if (!global.cachedPrisma) {
        global.cachedPrisma = new PrismaClient()
    }

    prisma = global.cachedPrisma
}

await (async function () {
    prisma.$queryRaw`PRAGMA busy_timeout = 5000;`
})()

export const db = prisma

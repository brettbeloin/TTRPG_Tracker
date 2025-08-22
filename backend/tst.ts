import { PrismaClient } from './generated/prisma'
import { withAccelerate } from '@prisma/extension-accelerate'

// 2
const prisma = new PrismaClient()
    .$extends(withAccelerate())

// 3
async function main() {
    // ... you will write your Prisma Client queries here
    await prisma.character.create({
        data: {
            urlPath: "fsdf",
            userId: 1,
            Campaign: {
                create: {
                    name: "trial",
                    desc: "tria",
                    Profile: {
                        create: {
                            name: "profileTest",
                            bio: "testProfile",
                        }
                    }

                }
            },

        }
    })
    await prisma.user.create({
        data: {
            userName: "test",
            password: "tet",
            profileId: 1,
        },
    },)

}

// 4
main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        // 5
        await prisma.$disconnect()
        process.exit(1)
    })

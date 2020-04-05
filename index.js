const { PrismaClient } = require("@prisma/client")

const prisma = new PrismaClient()

async function main() {

  await prisma.user.create({
    data: {
      name: "Melissa",
      email: "melissa@dcyoung.com",
      Basket: {
        create: {
          name: "Dylan",
          birthdate: new Date(),
          address: "with me!" 
        }
      }
    }
  });

  const allUsers = await prisma.user.findMany({
    include: {
      Basket: true
    }
  });

  console.log(allUsers)
}

main()
  .catch(e => {
    throw e;
  })
  .finally(async() => {
    await prisma.disconnect()
  });
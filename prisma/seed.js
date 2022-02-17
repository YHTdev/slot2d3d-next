const { PrismaClient } = require("@prisma/client");
const { twoDNums } = require("../data/numbers");
const prisma = new PrismaClient();
async function main() {
  await prisma.twoDNumer.createMany({
    data: twoDNums,
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

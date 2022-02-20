const { PrismaClient } = require("@prisma/client");
const { twoDNums,threeDNums } = require("../data/numbers");
const prisma = new PrismaClient();
const {hashSync} = require('bcrypt')
async function main() {
  await prisma.user.createMany({
    data:[
      {
        phone:'09123456789',
        password:hashSync("admin123",12),
        role:'SYS_ADMIN',
        
      },
      {
        phone:'09123456784',
        password:hashSync("admin123",12),
        role:'SYS_ADMIN',
        
      }
    ]
  })
  await prisma.twoDNumer.createMany({
    data:twoDNums
  })
  await prisma.threeDNumer.createMany({
    data:threeDNums
  })
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

import { PrismaClient } from "@prisma/client";
import { ResponseObj } from "../../lib/responseHelper";

const prisma = new PrismaClient();

export const get2DNums = async () => {
  const returnObj = ResponseObj;
  try {
    const twoDNums = await prisma.twoDNumer.findMany({
      select: {
        num: true,
        id: true,
      },
    });
    if (twoDNums) {
      returnObj.Data = twoDNums;
      returnObj.statusCode = 200;
    } else {
      returnObj.statusCode = 400;
      returnObj.message = "ဒေတာမရှိပါ";
    }
  } catch (error) {
    returnObj.statusCode = 500;
    returnObj.Error = error;
    await prisma.$disconnect();
  }
  return returnObj;
};

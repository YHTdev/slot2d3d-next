import { PrismaClient } from "@prisma/client";
import { ResponseObj } from "../../lib/responseHelper";

const prisma = new PrismaClient();

export const getUsers = async (req) => {
  const returnObj = ResponseObj;
  try {
    const { take, skip } = req.body;
    const users = await prisma.user.findMany({
      include: {
        profile: true,
      },
      take: take ? take : 20,
      skip: skip ? skip : 0,
    });
    returnObj.statusCode = 200;
    returnObj.Data = users;
  } catch (error) {
    returnObj.Error = error;
    returnObj.statusCode = 500;
  }
  return returnObj;
};

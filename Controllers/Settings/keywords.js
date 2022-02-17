import { ResponseObj } from "../../lib/responseHelper";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export const getKeywords = async (req) => {
  const returnObj = ResponseObj;
  try {
    const keywords = await prisma.keywork.findMany({
      select: {
        name: true,
        twoD: true,
        id: true,
        createdAt: true,
        updatedAt: true,
      },
    });
    returnObj.Data = keywords;
    returnObj.statusCode = 200;
    returnObj.message = "success";
  } catch (error) {
    await prisma.$disconnect();
    returnObj.Error = error;
    returnObj.statusCode = 500;
  }
  return returnObj;
};

export const createKeyword = async (req) => {
  const returnObj = ResponseObj;
  try {
    const { name, nums } = req.body;

    const keyword = await prisma.keywork.create({
      data: {
        name: name,
        twoD: {
          createMany: {
            data: nums,
            skipDuplicates: true,
          },
        },
      },
    });

    if (keyword) {
      returnObj.statusCode = 201;
      returnObj.Data = keyword;
      returnObj.message = "ဖန်တီးမှု့အောင်မြင်ပါသည်";
    } else {
      returnObj.statusCode = 400;
      returnObj.message = "ဖန်တီးမှု့မအောင်မြင်ပါ";
    }
  } catch (error) {
    await prisma.$disconnect();
    returnObj.Error = error;
    returnObj.statusCode = 500;
  }
  return returnObj;
};

export const updateKeyword = async (req) => {
  const returnObj = ResponseObj;
  try {
    const { id, name, nums } = req.body;

    const keyword = prisma.keywork.update({
      where: {
        id: id,
      },
      data: {
        name: name,
        twoD: {
          updateMany: {
            data: nums,
          },
        },
      },
    });
    if (keyword) {
      returnObj.Data = keyword;
      returnObj.statusCode = 200;
      returnObj.message = "တည်းဖြတ်မှု့အောင်မြင်ပါသည်";
    } else {
      returnObj.statusCode = 400;
      returnObj.message = "တည်းဖြတ်မှု့မအောင်မြင်ပါ";
    }
  } catch (error) {
    returnObj.Error = error;
    await prisma.$disconnect();
    returnObj.statusCode = 500;
  }
  return returnObj;
};

export const deleteKeyword = async (req) => {
  const returnObj = ResponseObj;
  try {
    const { id } = req.body;
    const keyword = prisma.keywork.delete({
      where: {
        id: id,
      },
    });
    if (keyword) {
      returnObj.statusCode = 200;
      returnObj.message = "ဖျက်ခြင်းအောင်မြင်ပါသည်";
    } else {
      returnObj.statusCode = 400;
      returnObj.message = "ဖျက်ခြင်းမအောင်မြင်ပါ";
    }
  } catch (error) {
    await prisma.$disconnect();
    returnObj.Error = error;
    returnObj.statusCode = 500;
  }
  return returnObj;
};

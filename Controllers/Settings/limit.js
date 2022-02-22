import { PrismaClient } from "@prisma/client";
import { ResponseObj } from "../../lib/responseHelper";

const prisma = new PrismaClient();

export const get2DLimits = async (req) => {
  const returnObj = ResponseObj;
  try {
    const limits = await prisma.limit.findMany({
      where: {
        type: "TwoD",
      },
      select: {
        amount: true,
        id: true,
        session: {
          select: {
            name: true,
            id: true,
            fromDt: true,
            toDt: true,
          },
        },
      },
    });
    returnObj.Data = limits;
    returnObj.statusCode = 200;
  } catch (error) {
    returnObj.statusCode = 500;
    returnObj.Error = error;
  }
  return returnObj;
};

export const get3DLimits = async (req) => {
  const returnObj = ResponseObj;
  try {
    const limits = await prisma.limit.findMany({
      where: {
        type: "ThreeD",
      },
      select: {
        amount: true,
        id: true,
        session: {
          select: {
            name: true,
            id: true,
            fromDt: true,
            toDt: true,
          },
        },
      },
    });
    returnObj.Data = limits;
    returnObj.statusCode = 200;
  } catch (error) {
    console.log(error);
    returnObj.statusCode = 500;
    returnObj.Error = error;
  }
  return returnObj;
};

export const createLimit = async (req) => {
  const returnObj = ResponseObj;
  try {
    const { sessionId, amount, type } = req.body;
    const isExist = await prisma.limit.findUnique({
      where: {
        sessionId: sessionId,
      },
    });
    if (isExist) {
      returnObj.message = "ထည့်သွင်းပြီးသားဖြစ်သည်";
      returnObj.statusCode = 400;
    } else {
      const limit = await prisma.limit.create({
        data: {
          amount: parseInt(amount),
          type: type,
          sessionId: sessionId,
        },
      });
      if (limit) {
        returnObj.Data = limit;
        returnObj.statusCode = 200;
        returnObj.message = "လုပ်ဆောင်ချက်အောင်မြင်ပါသည်";
      } else {
        returnObj.message = "လုပ်ဆောင်ချက်မအောင်မြင်ပါ";
        returnObj.statusCode = 400;
      }
    }
  } catch (error) {
    console.log(error);
    returnObj.statusCode = 500;
    returnObj.Error = error;
  }
  return returnObj;
};

export const updateLimit = async (req) => {
  const returnObj = ResponseObj;
  try {
    const { sessionId, amount, type, id } = req.body;
    const isExist = await prisma.limit.findUnique({
      where: {
        id: id,
      },
    });
    if (isExist) {
      const limit = await prisma.limit.update({
        where: {
          id: id,
        },
        data: {
          amount: amount,
          type: type,
          sessionId: sessionId,
        },
      });
      if (limit) {
        returnObj.statusCode = 200;
        returnObj.message = "လုပ်ဆောင်ချက်အောင်မြင်ပါသည်";
      } else {
        returnObj.statusCode = 400;
        returnObj.message = "လုပ်ဆောင်ချက်မအောင်မြင်ပါ";
      }
    } else {
      returnObj.message = "ရှာမတွေ့ပါ";
      returnObj.statusCode = 200;
    }
  } catch (error) {
    returnObj.statusCode = 500;
    returnObj.Error = error;
  }
  return returnObj;
};

export const deleteLimit = async (req) => {
  const returnObj = ResponseObj;
  try {
    const { id } = req.body;

    const limit = await prisma.limit.delete({
      where: {
        id: id,
      },
    });
    if (limit) {
      returnObj.statusCode = 200;
      returnObj.message = "လုပ်ဆောင်ချက်အောင်မြင်ပါသည်";
    } else {
      returnObj.statusCode = 400;
      returnObj.message = "လုပ်ဆောင်ချက်မအောင်မြင်ပါ";
    }
  } catch (error) {
    returnObj.statusCode = 500;
    returnObj.Error = error;
  }
  return returnObj;
};

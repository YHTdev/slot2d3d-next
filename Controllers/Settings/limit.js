import { PrismaClient } from "@prisma/client";
import { ResponseObj } from "../../lib/responseHelper";

const prisma = new PrismaClient();

export const get2DLimits = async req => {
  const returnObj = ResponseObj;
  try {
    const limits = await prisma.limit.findMany({
      where: {
        type: "TwoD"
      }
    });
    returnObj.Data = limits;
    returnObj.statusCode = 200;
  } catch (error) {
    returnObj.statusCode = 500;
    returnObj.Error = error;
  }
  return returnObj;
};

export const get3DLimits = async req => {
  const returnObj = ResponseObj;
  try {
    const limits = await prisma.limit.findMany({
      where: {
        type: "ThreeD"
      }
    });
    returnObj.Data = limits;
    returnObj.statusCode = 200;
  } catch (error) {
    returnObj.statusCode = 500;
    returnObj.Error = error;
  }
  return returnObj;
};

export const createLimit = async req => {
  const returnObj = ResponseObj;
  try {
    const { sessionId, name, amount, type } = req.body;
    const limit = await prisma.limit.create({
      data: {
        name: name,
        amount: amount,
        sessionId: sessionId,
        type: type
      }
    });
    if (limit) {
      returnObj.Data = limit;
      returnObj.statusCode = 200;
      returnObj.message = "လုပ်ဆောင်ချက်အောင်မြင်ပါသည်";
    } else {
      returnObj.message = "လုပ်ဆောင်ချက်မအောင်မြင်ပါ";
      returnObj.statusCode = 400;
    }
  } catch (error) {
    returnObj.statusCode = 500;
    returnObj.Error = error;
  }
  return returnObj;
};

export const updateLimit = async req => {
  const returnObj = ResponseObj;
  try {
    const { sessionId, name, amount, type, id } = req.body;
    const isExist = await prisma.limit.findUnique({
      where: {
        id: id
      }
    });
    if (isExist) {
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

export const deleteLimit = async req => {
  const returnObj = ResponseObj;
  try {
  } catch (error) {
    returnObj.statusCode = 500;
    returnObj.Error = error;
  }
  return returnObj;
};



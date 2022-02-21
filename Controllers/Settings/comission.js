import { PrismaClient } from "@prisma/client";
import { ResponseObj } from "../../lib/responseHelper";

const prisma = new PrismaClient();

export const get2DComissions = async (req) => {
  const returnObj = ResponseObj;
  try {
    const comissions = await prisma.commission.findMany({
      where: {
        type: "TwoD",
      },
    });
    returnObj.Data = comissions;
    returnObj.statusCode = 200;
  } catch (error) {
    console.log(error);
    returnObj.statusCode = 500;
    returnObj.Error = error;
  }
  return returnObj;
};

export const get3DComissions = async () => {
  const returnObj = ResponseObj;
  try {
    const comissions = await prisma.commission.findMany({
      where: {
        type: ThreeD,
      },
    });
    returnObj.Data = comissions;
    returnObj.statusCode = 200;
  } catch (error) {
    returnObj.statusCode = 500;
    returnObj.Error = error;
  }
  return returnObj;
};
export const createCommission = async (req) => {
  const returnObj = ResponseObj;
  try {
    const { name, rate, type } = req.body;
    const comission = await prisma.commission.create({
      data: {
        name: name,
        rate: parseInt(rate),
        type: type,
      },
    });
    if (comission) {
      returnObj.statusCode = 200;
      returnObj.Data = comission;
      returnObj.message = "လုပ်ဆောင်ချက်အောင်မြင်ပါသည်";
    } else {
      returnObj.statusCode = 400;
      returnObj.message = "လုပ်ဆောင်ချက်မအောင်မြင်ပါ";
    }
  } catch (error) {
    console.log(error);
    returnObj.statusCode = 500;
    returnObj.Error = error;
  }
  return returnObj;
};

export const statusChangeComission = async (req) => {
  const returnObj = ResponseObj;
  try {
    const { status, id } = req.body;
    const isExist = await prisma.commission.findUnique({
      where: {
        id: id,
      },
    });
    if (isExist) {
      const comission = await prisma.commission.update({
        where: {
          id: id,
        },
        data: {
          status: status,
        },
      });
      if (comission) {
        returnObj.Data = comission;
        returnObj.statusCode = 200;
        returnObj.message = "လုပ်ဆောင်ချက်အောင်မြင်ပါသည်";
      } else {
        returnObj.message = "လုပ်ဆောင်ချက်မအောင်မြင်ပါ";
        returnObj.statusCode = 400;
      }
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

export const updateComission = async (req) => {
  const returnObj = ResponseObj;
  try {
    const { id, name, rate } = req.body;
    const isExist = await prisma.commission.findUnique({
      where: {
        id: id,
      },
    });
    if (isExist) {
      const comission = await prisma.commission.update({
        where: {
          id: id,
        },
        data: {
          name: name,
          id: id,
          type: type,
          rate: parseInt(rate),
        },
      });
      if (comission) {
        returnObj.message = "လုပ်ဆောင်ချက်အောင်မြင်ပါသည်";
        returnObj.statusCode = 200;
        returnObj.Data = comission;
      } else {
        returnObj.message = "လုပ်ဆောင်ချက်မအောင်မြင်ပါ";
        returnObj.statusCode = 400;
      }
    } else {
      returnObj.message = "ရှာမတွေ့ပါ";
      returnObj.statusCode = 400;
    }
  } catch (error) {
    returnObj.statusCode = 500;
    returnObj.Error = error;
  }
  return returnObj;
};

export const deleteComission = async (req) => {
  const returnObj = ResponseObj;
  try {
    const { id } = req.body;
    const isExist = await prisma.commission.findUnique({
      where: {
        id: id,
      },
    });
    if (isExist) {
      const comission = await prisma.commission.delete({
        where: {
          id: id,
        },
      });
      if (comission) {
        returnObj.message = "လုပ်ဆောင်ချက်အောင်မြင်ပါသည်";
        returnObj.statusCode = 200;
      } else {
        returnObj.message = "လုပ်ဆောင်ချက်မအောင်မြင်ပါ";
        returnObj.statusCode = 400;
      }
    } else {
      returnObj.message = "ရှာမတွေ့ပါ";
      returnObj.statusCode = 400;
    }
  } catch (error) {
    returnObj.statusCode = 500;
    returnObj.Error = error;
  }
  return returnObj;
};

import { PrismaClient } from "@prisma/client";
import { ResponseObj } from "../../lib/responseHelper";
const prisma = new PrismaClient();

export const get2DBets = async (req) => {
  const returnObj = ResponseObj;
  try {
    const bets = await prisma.bets.findMany({
      where: {
        type: "TwoD",
      },
      select: {
        customerNm: true,
        id: true,
        totalAmt: true,
        betOnTwoDNumber: {
          select: {
            TwoDNum: {
              select: {
                num: true,
                id: true,
              },
            },
            amount: true,
          },
        },
      },
    });
    returnObj.statusCode = 200;
    returnObj.Data = bets;
    returnObj.message = "success";
  } catch (error) {
    console.log(error);
    returnObj.statusCode = 500;
    returnObj.Error = error;
  }
  return returnObj;
};

export const create2DBet = async (req) => {
  const returnObj = ResponseObj;
  try {
    //   twoDNumber Input
    // [
    //     {
    //         twoDNumerId:'',
    //         amount:45
    //     }
    // ]
    const { betOnTwoDNumer, customerNm, sessionId, totalAmt } = req.body;
    const bet = await prisma.bets.create({
      data: {
        customerNm: customerNm,
        type: "TwoD",
        sessionId: sessionId,
        totalAmt: parseInt(totalAmt),
        betOnTwoDNumber: {
          createMany: {
            data: betOnTwoDNumer,
          },
        },
      },
    });
    if (bet) {
      returnObj.statusCode = 200;
      returnObj.message = "လုပ်ဆောင်ချက်အောင်မြင်ပါသည်";
      returnObj.Data = bet;
    } else {
      returnObj.statusCode = 400;
      returnObj.message = "လုပ်ဆောင်ချက်မအောင်မြင်ပါ";
    }
  } catch (error) {
    returnObj.statusCode = 500;
    returnObj.Error = error;
  }
};

export const update2DBet = async (req) => {
  const returnObj = ResponseObj;
  try {
  } catch (error) {
    returnObj.statusCode = 500;
    returnObj.Error = error;
  }
};

export const delete2DBet = async (req) => {
  const returnObj = ResponseObj;
  try {
  } catch (error) {
    returnObj.statusCode = 500;
    returnObj.Error = error;
  }
};

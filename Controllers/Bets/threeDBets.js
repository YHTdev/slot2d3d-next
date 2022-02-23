import { PrismaClient } from "@prisma/client";
import { each } from "lodash";
import { ResponseObj } from "../../lib/responseHelper";
const prisma = new PrismaClient();

export const get3DBets = async (req) => {
  const returnObj = ResponseObj;
  try {
    const bets = await prisma.bets.findMany({
      where: {
        type: "ThreeD",
      },
      select: {
        customerNm: true,
        id: true,
        totalAmt: true,
        betOnThreeDNumber: {
          select: {
            ThreeDNum: {
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

export const create3DBet = async (req) => {
  const returnObj = ResponseObj;
  try {
    const { betOnThreeDNumber, customerNm, sessionId, totalAmt, agentId } =
      req.body;
    let formatedNums = [];
    each(betOnThreeDNumber, (bet) => {
      formatedNums.push({
        threeDNumerId: bet.threeDNumerId,
        amount: parseInt(bet.amount),
      });
    });
    const bet = await prisma.bets.create({
      data: {
        customerNm: customerNm,
        type: "ThreeD",
        sessionId: sessionId,
        userId: agentId,
        totalAmt: parseInt(totalAmt),
        betOnThreeDNumber: {
          createMany: {
            data: formatedNums,
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
    console.log(error);
    returnObj.statusCode = 500;
    returnObj.Error = error;
  }
  return returnObj;
};

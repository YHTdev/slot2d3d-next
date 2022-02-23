import { PrismaClient } from "@prisma/client";
import { each } from "lodash";
import { verifyToken } from "../../../lib/JWT";
import { ResponseObj } from "../../../lib/responseHelper";

const prisma = new PrismaClient();

export const getAdmin2DLeger = async (req) => {
  const returnObj = ResponseObj;
  try {
    const leger = await prisma.bets.findMany({
      where: {
        type: "TwoD",
      },
      select: {
        id: true,
        customerNm: true,
        totalAmt: true,
        betOnTwoDNumber: {
          select: {
            TwoDNum: {
              select: {
                num: true,
              },
            },
            amount: true,
          },
        },
        createdAt: true,
        updatedAt: true,
      },
    });
    let grandTotal = 0;
    each(leger, (l) => {
      grandTotal += l.totalAmt;
    });
    returnObj.statusCode = 200;
    returnObj.Data = {
      leger: leger,
      grandTotal: grandTotal,
    };
  } catch (error) {
    returnObj.statusCode = 500;
    returnObj.Error = error;
  }

  return returnObj;
};

export const getAgentLeger = async (req) => {
  const returnObj = ResponseObj;
  try {
    const { fromDt, toDt } = req.query();
    const userToken = req.cookies["USER_TOKEN"];
    const user = verifyToken(userToken);
    if (user) {
      const leger = await prisma.bets.findMany({
        where: {
          type: "TwoD",
          userId: user.id,
        },
        select: {
          id: true,
          customerNm: true,
          totalAmt: true,
          betOnTwoDNumber: {
            select: {
              TwoDNum: {
                select: {
                  num: true,
                },
              },
              amount: true,
            },
          },
          createdAt: true,
          updatedAt: true,
        },
      });
      let grandTotal = 0;
      each(leger, (l) => {
        grandTotal += l.totalAmt;
      });
      returnObj.statusCode = 200;
      returnObj.Data = {
        leger: leger,
        grandTotal: grandTotal,
      };
    } else {
      returnObj.statusCode = 401;
      returnObj.message = "အသုံးပြုခွင့်မပြုပါ";
    }
  } catch (error) {
    console.log(error);
    returnObj.statusCode = 500;
    returnObj.Error = error;
  }
  return returnObj;
};

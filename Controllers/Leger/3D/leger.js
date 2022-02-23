import { PrismaClient } from "@prisma/client";
import { each } from "lodash";
import { verifyToken } from "../../../lib/JWT";
import { ResponseObj } from "../../../lib/responseHelper";

const prisma = new PrismaClient();

export const getAgentLeger = async (req) => {
  const returnObj = ResponseObj;
  try {
    const userToken = req.cookies["USER_TOKEN"];
    const { fromDt, toDt, sessionId } = req.query;

    const user = verifyToken(userToken);
    if (user) {
      let query = {
        type: "ThreeD",
        userId: user.id,
        updatedAt: {
          gte: new Date(
            new Date().getFullYear(),
            new Date().getMonth() - 1,
            new Date().getDate()
          ),
          lte: new Date(),
        },
      };
      if (fromDt) {
        query["updatedAt"]["gte"] = new Date(fromDt);
      }
      if (toDt) {
        query["updatedAt"]["lte"] = new Date(toDt);
      }
      if (sessionId) {
        query["sessionId"] = sessionId;
      }
      const leger = await prisma.bets.findMany({
        where: query,
        select: {
          id: true,
          customerNm: true,
          totalAmt: true,
          session: {
            select: {
              name: true,
            },
          },
          betOnThreeDNumber: {
            select: {
              ThreeDNum: {
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
        orderBy: {
          updatedAt: "desc",
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

import { PrismaClient } from "@prisma/client";
import { each } from "lodash";
import { verifyToken } from "../../../lib/JWT";
import { ResponseObj } from "../../../lib/responseHelper";

const prisma = new PrismaClient();

export const getAdminLeger = async (req) => {
  const returnObj = ResponseObj;
  try {
    const { fromDt, toDt, sessionId, type, agentId } = req.query;
    let query = {
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
    if (type) {
      query["type"] = type;
    }
    if (agentId) {
      query["userId"] = agentId;
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
        betOnTwoDNumber: {
          select: {
            TwoDNum: {
              select: {
                num: true,
              },
            },
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
  } catch (error) {
    console.log(error);
    returnObj.statusCode = 500;
    returnObj.Error = error;
  }
  return returnObj;
};

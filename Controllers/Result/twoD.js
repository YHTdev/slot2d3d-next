import { PrismaClient } from '@prisma/client'
import { ResponseObj } from '../../lib/responseHelper'

const prisma = new PrismaClient()

export const get2DResults = async req => {
  const returnObj = ResponseObj
  try {
    const results = await prisma.twoDResult.findMany({
      where: {},
      select: {
        num: true,
        id: true,
        session: {
          select: {
            name: true,
            id: true
          }
        },
        confirmDt: true,
        createdAt: true,
        updatedAt: true
      },
      orderBy:{
        createdAt:'desc'
      }
    })
    returnObj.statusCode = 200
    returnObj.Data = results
  } catch (error) {
    returnObj.Error = error
    returnObj.statusCode = 500
  }
  return returnObj
}

export const create2DResult = async req => {
  const returnObj = ResponseObj
  try {
    const { twoDNumerId, sessionId, confirmDt } = req.body

    const confirmedResult = await prisma.twoDResult.findFirst({
      where: {
        confirmDt: confirmDt,
        sessionId: sessionId
      }
    })
    if (confirmedResult) {
      returnObj.message = 'ပေါက်ဂဏန်းအားကြေညာထားပြီးဖြစ်သည်'
      returnObj.statusCode=400
    } else {
      const result = await prisma.twoDResult.create({
        data: {
          twoDNumerId: twoDNumerId,
          sessionId: sessionId,
          confirmDt: confirmDt
        }
      })
      if (result) {
        returnObj.statusCode = 200
        returnObj.message = 'လုပ်ဆောင်ချက်အောင်မြင်ပါသည်'
      } else {
        returnObj.message = 'လုပ်ဆောင်မှု့မအောင်မြင်ပါ'
        returnObj.statusCode = 400
      }
    }
  } catch (error) {
    returnObj.Error = error
    returnObj.statusCode = 500
  }
  return returnObj
}

export const delete2DResult = async req => {
  const returnObj = ResponseObj
  try {
    const { id } = req.body
    const result = await prisma.twoDResult.delete({
      where: {
        id: id
      }
    })
    if (result) {
      returnObj.statusCode = 200
      returnObj.message = 'လုပ်ဆောင်ချက်အောင်မြင်ပါသည်'
    } else {
      returnObj.statusCode = 400
      returnObj.message = 'လုပ်ဆောင်မှု့မအောင်မြင်ပါ'
    }
  } catch (error) {}
  return returnObj
}

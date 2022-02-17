import { ResponseObj } from "../../lib/responseHelper";
import { PrismaClient } from "@prisma/client";
import { each } from "lodash";
const prisma = new PrismaClient();
export const getKeywords = async req => {
  const returnObj = ResponseObj;
  try {
    const keywords = await prisma.keyword.findMany({
      select: {
        name: true,
        id: true,
        twoDNumber: {
          select: {
            TwoDNumer: {
              select: {
                id: true,
                num: true
              }
            }
          }
        }
      }
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

export const createKeyword = async req => {
  const returnObj = ResponseObj;
  try {
    const { name, nums } = req.body;
    let twoDNumbers = [];
    each(nums, num => {
      twoDNumbers.push({
        twoDNumerId: num
      });
    });

    const keyword = await prisma.keyword.create({
      data: {
        name: name,
        twoDNumber: {
          createMany: {
            data: twoDNumbers
          }
        }
      }
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

export const updateKeyword = async req => {
  const returnObj = ResponseObj;
  try {
    const { id, name, nums } = req.body;
    let twoDNumbers = [];
    each(nums, num => {
      twoDNumbers.push({
        twoDNumerId: num
      });
    });
    await prisma.twoDNumerOnKeyword.deleteMany({
      where:{
        keywordId:id
      }
    })
    const keyword = await prisma.keyword.update({
      where: {
        id: id
      },
      data: {
        name: name,
        twoDNumber: {
          createMany:{
            skipDuplicates:true,
            data:twoDNumbers
          }
        }
      }
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

export const deleteKeyword = async req => {
  const returnObj = ResponseObj;
  try {
    const { id } = req.body;
    const isExist = await prisma.keyword.findUnique({
      where:{
        id:id
      }
    })
    if(isExist){
      await prisma.twoDNumerOnKeyword.deleteMany({
        where:{
          keywordId:id
        }
      })
      const keyword = await prisma.keyword.delete({
        where: {
          id: id
        },
        
      });
      if (keyword) {
        returnObj.statusCode = 200;
        returnObj.message = "ဖျက်ခြင်းအောင်မြင်ပါသည်";
      } else {
        returnObj.statusCode = 400;
        returnObj.message = "ဖျက်ခြင်းမအောင်မြင်ပါ";
      }
    }
    else{
       returnObj.statusCode=400
       returnObj.message="မရှိပါ"
    }
  } catch (error) {
    await prisma.$disconnect();
    
    returnObj.Error = error.message;
    returnObj.statusCode = 500;
  }
  return returnObj;
};

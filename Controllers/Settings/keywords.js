import { ResponseObj } from "../../lib/responseHelper";
import { PrismaClient } from "@prisma/client";
import { each } from "lodash";
const prisma = new PrismaClient();
export const get2DKeywords = async req => {
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

export const create2DKeyword = async req => {
  const returnObj = ResponseObj;
  try {
    const { name, nums } = req.body;
    const isExist = await prisma.keyword.findUnique({
      where: {
        name: name
      }
    });
    if (!isExist) {
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
    } else {
      returnObj.statusCode = 400;
      returnObj.message = "ဖန်တီးပြီးသားဖြစ်သည်";
    }
  } catch (error) {
    await prisma.$disconnect();
    returnObj.Error = error;
    returnObj.statusCode = 500;
  }
  return returnObj;
};

export const update2DKeyword = async req => {
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
      where: {
        keywordId: id
      }
    });
    const keyword = await prisma.keyword.update({
      where: {
        id: id
      },
      data: {
        name: name,
        twoDNumber: {
          createMany: {
            skipDuplicates: true,
            data: twoDNumbers
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

export const delete2DKeyword = async req => {
  const returnObj = ResponseObj;
  try {
    const { id } = req.body;
    const isExist = await prisma.keyword.findUnique({
      where: {
        id: id
      }
    });
    if (isExist) {
      await prisma.twoDNumerOnKeyword.deleteMany({
        where: {
          keywordId: id
        }
      });
      const keyword = await prisma.keyword.delete({
        where: {
          id: id
        }
      });
      if (keyword) {
        returnObj.statusCode = 200;
        returnObj.message = "ဖျက်ခြင်းအောင်မြင်ပါသည်";
      } else {
        returnObj.statusCode = 400;
        returnObj.message = "ဖျက်ခြင်းမအောင်မြင်ပါ";
      }
    } else {
      returnObj.statusCode = 400;
      returnObj.message = "မရှိပါ";
    }
  } catch (error) {
    await prisma.$disconnect();

    returnObj.Error = error.message;
    returnObj.statusCode = 500;
  }
  return returnObj;
};

export const get3DKeywords = async req => {
  const responseObj = ResponseObj;
  try {
    const keywords = await prisma.keyword.findMany({
      select: {
        name: true,
        id: true,
        threeDNumber: {
          select: {
            ThreeDNumer: {
              select: {
                id: true,
                num: true
              }
            }
          }
        }
      }
    });
    responseObj.Data = keywords;
    responseObj.statusCode = 200;
    responseObj.message = "success";
  } catch (error) {
    responseObj.Error = error;
    responseObj.statusCode = 500;
  }
  return responseObj
};

export const create3DKeyword = async req => {
  const responseObj = ResponseObj;
  try {
    const { name, nums } = req.body;
    const isExist = await prisma.keyword.findUnique({
      where: {
        name: name
      }
    });
    if (isExist) {
      responseObj.statusCode = 400;
      responseObj.message = "ရှိပြီးသားဖြစ်သည်";
    } else {
      let threeDNumbers = [];
      each(nums, num => {
        threeDNumbers.push({
          threeDNumerId: num
        });
      });

      const keyword = await prisma.keyword.create({
        data: {
          name: name,
          threeDNumber: {
            createMany: {
              data: threeDNumbers
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
    }
  } catch (error) {
    responseObj.Error = error;
    responseObj.statusCode = 500;
  }
  return responseObj
};

export const update3DKeyword = async req => {
  const responseObj = ResponseObj;
  try {
    const { id, name, nums } = req.body;
    let threeDNumbers = [];
    each(nums, num => {
      threeDNumbers.push({
        threeDNumerId: num
      });
    });
    const IsExist = await prisma.threeDNumberOnKeyword.findFirst({
      where: {
        keywordId: id
      }
    });
    if (IsExist) {
      await prisma.threeDNumberOnKeyword.deleteMany({
        where: {
          keywordId: id
        }
      });
    }
    const keyword = await prisma.keyword.update({
      where: {
        id: id
      },
      data: {
        name: name,
        threeDNumber: {
          createMany: {
            skipDuplicates: true,
            data: threeDNumbers
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
    responseObj.Error = error;
    responseObj.statusCode = 500;
  }
  return responseObj
};

export const delete3DKeyword = async req => {
  const responseObj = ResponseObj;
  try {
    const {id} = req.body
    const isExist = await prisma.keyword.findUnique({
      where:{
        id:id
      }
    })
    if(isExist){
      await prisma.threeDNumberOnKeyword.deleteMany({
        where:{
          keywordId:id
        }
      })
      const keyword = await prisma.keyword.delete({
        where:{
          id:id
        }
      })
      if (keyword) {
        returnObj.statusCode = 200;
        returnObj.message = "ဖျက်ခြင်းအောင်မြင်ပါသည်";
      } else {
        returnObj.statusCode = 400;
        returnObj.message = "ဖျက်ခြင်းမအောင်မြင်ပါ";
      }
    }
    else{
      responseObj.statusCode=400;
      responseObj.message="မတွေ့ပါ"
    }
  } catch (error) {
    responseObj.Error = error;
    responseObj.statusCode = 500;
  }
  return responseObj
};

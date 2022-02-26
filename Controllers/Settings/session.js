import { PrismaClient } from "@prisma/client";
import { ResponseObj } from "../../lib/responseHelper";

const prisma = new PrismaClient();

// 2D management

export const get2DSessions = async (req) => {
  const returnObj = ResponseObj;
  try {
    const {status} = req.query
    let query = {
      type: "TwoDSession",
    }
    if(status){
      query['status']=status==='1'?true:false
    }
    const sessions = await prisma.session.findMany({
      where: query,
    });
    returnObj.statusCode = 200;
    returnObj.Data = sessions;
    returnObj.message = "success";
  } catch (error) {
    returnObj.statusCode = 500;
    returnObj.Error = error;
  }

  return returnObj;
};

// create
export const create2DSessions = async (req) => {
  const returnObj = ResponseObj;
  try {
    const { name, fromDt, toDt, status } = req.body;
    const session = await prisma.session.create({
      data: {
        name: name,
        fromDt: fromDt,
        toDt: toDt,
        type: "TwoDSession",
        status: status ? status : true,
      },
    });
    if (session) {
      returnObj.statusCode = 200;
      returnObj.message = "လုပ်ဆောင်မှု့အောင်မြင်ပါသည်";
      returnObj.Data = session;
    } else {
      returnObj.statusCode = 400;
      returnObj.message = "လုပ်ဆောင်မှု့မအောင်မြင်ပါ";
    }
  } catch (error) {
    console.log(error);
    returnObj.statusCode = 500;
    returnObj.Error = error;
  }

  return returnObj;
};

// update

export const update2DSessions = async (req) => {
  const returnObj = ResponseObj;
  try {
    const { name, fromDt, toDt, id, status } = req.body;
    const isExist = await prisma.session.findUnique({
      where: {
        id: id,
      },
    });
    if (isExist) {
      const session = await prisma.session.update({
        where: {
          id: id,
        },
        data: {
          name: name,
          fromDt: fromDt,
          toDt: toDt,
          status: status ? status : true,
        },
      });
      if (session) {
        returnObj.statusCode = 200;
        returnObj.message = "လုပ်ဆောင်မှု့အောင်မြင်ပါသည်";
        returnObj.Data = session;
      } else {
        returnObj.statusCode = 400;
        returnObj.message = "လုပ်ဆောင်မှု့မအောင်မြင်ပါ";
      }
    } else {
      returnObj.statusCode = 400;
      returnObj.message = "ရှာမတွေ့ပါ";
    }
  } catch (error) {
    returnObj.statusCode = 500;
    returnObj.Error = error;
  }

  return returnObj;
};

// delete

export const delete2DSessions = async (req) => {
  const returnObj = ResponseObj;
  try {
    const { id } = req.body;
    const isExist = await prisma.session.findUnique({
      where: {
        id: id,
      },
    });
    if (isExist) {
      const session = await prisma.session.delete({
        where: {
          id: id,
        },
      });
      if (session) {
        returnObj.statusCode = 200;
        returnObj.message = "လုပ်ဆောင်မှု့အောင်မြင်ပါသည်";
      } else {
        returnObj.statusCode = 400;
        returnObj.message = "လုပ်ဆောင်မှု့မအောင်မြင်ပါ";
      }
    } else {
      returnObj.statusCode = 400;
      returnObj.message = "ရှာမတွေ့ပါ";
    }
  } catch (error) {
    returnObj.statusCode = 500;
    returnObj.Error = error;
  }

  return returnObj;
};

export const changeSessionStatus = async (req) => {
  const returnObj = ResponseObj;
  try {
    const { status, id } = req.body;
    const isExist = await prisma.session.findUnique({
      where: {
        id: id,
      },
    });
    if (isExist) {
      const session = await prisma.session.update({
        where: {
          id: id,
        },
        data: {
          status: status,
        },
      });
      if (session) {
        returnObj.statusCode = 200;
        returnObj.message = "လုပ်ဆောင်မှု့အောင်မြင်ပါသည်";
      } else {
        returnObj.statusCode = 400;
        returnObj.message = "လုပ်ဆောင်မှု့မအောင်မြင်ပါ";
      }
    } else {
      returnObj.statusCode = 400;
      returnObj.message = "ရှာမတွေ့ပါ";
    }
  } catch (error) {
    returnObj.statusCode = 500;
    returnObj.Error = error;
  }
  return returnObj;
};

// 3D management

export const get3DSessions = async (req) => {
  const returnObj = ResponseObj;
  try {
    const {status} = req.query
    let query = {
      type: "TwoDSession",
    }
    if(status){
      query['status']=status==='1'?true:false
    }
    const sessions = await prisma.session.findMany({
      where:query,
    });
    returnObj.statusCode = 200;
    returnObj.Data = sessions;
    returnObj.message = "success";
  } catch (error) {
    console.log(error);
    returnObj.statusCode = 500;
    returnObj.Error = error;
  }

  return returnObj;
};

export const create3DSessions = async (req) => {
  const returnObj = ResponseObj;
  try {
    const { name, fromDt, toDt, status } = req.body;
    const session = await prisma.session.create({
      data: {
        name: name,
        fromDt: fromDt,
        toDt: toDt,
        type: "ThreeDSession",
        status: status ? status : true,
      },
    });
    if (session) {
      returnObj.statusCode = 200;
      returnObj.message = "လုပ်ဆောင်မှု့အောင်မြင်ပါသည်";
      returnObj.Data = session;
    } else {
      returnObj.statusCode = 400;
      returnObj.message = "လုပ်ဆောင်မှု့မအောင်မြင်ပါ";
    }
  } catch (error) {
    console.log(error);
    returnObj.statusCode = 500;
    returnObj.Error = error;
  }

  return returnObj;
};

export const update3DSessions = async (req) => {
  const returnObj = ResponseObj;
  try {
    const { name, fromDt, toDt, id, status } = req.body;
    const isExist = await prisma.session.findUnique({
      where: {
        id: id,
      },
    });
    if (isExist) {
      const session = await prisma.session.update({
        where: {
          id: id,
        },
        data: {
          name: name,
          fromDt: fromDt,
          toDt: toDt,
          status: status ? status : true,
        },
      });
      if (session) {
        returnObj.statusCode = 200;
        returnObj.message = "လုပ်ဆောင်မှု့အောင်မြင်ပါသည်";
        returnObj.Data = session;
      } else {
        returnObj.statusCode = 400;
        returnObj.message = "လုပ်ဆောင်မှု့မအောင်မြင်ပါ";
      }
    }
  } catch (error) {
    returnObj.statusCode = 500;
    returnObj.Error = error;
  }

  return returnObj;
};

export const delete3DSessions = async (req) => {
  const returnObj = ResponseObj;
  try {
    const { id } = req.body;
    const isExist = await prisma.session.findUnique({
      where: {
        id: id,
      },
    });
    if (isExist) {
      const session = await prisma.session.delete({
        where: {
          id: id,
        },
      });
      if (session) {
        returnObj.statusCode = 200;
        returnObj.message = "လုပ်ဆောင်မှု့အောင်မြင်ပါသည်";
      } else {
        returnObj.statusCode = 400;
        returnObj.message = "လုပ်ဆောင်မှု့မအောင်မြင်ပါ";
      }
    } else {
      returnObj.statusCode = 400;
      returnObj.message = "ရှာမတွေ့ပါ";
    }
  } catch (error) {
    returnObj.statusCode = 500;
    returnObj.Error = error;
  }

  return returnObj;
};

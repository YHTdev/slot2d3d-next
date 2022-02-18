import { PrismaClient } from "@prisma/client";
import { ResponseObj } from "../../lib/responseHelper";
import { hashSync, compareSync } from "bcrypt";
import { generateToken } from "../../lib/JWT";
const prisma = new PrismaClient();

export const getUsers = async (req) => {
  const returnObj = ResponseObj;
  try {
    const { take, skip } = req.query;
    const users = await prisma.user.findMany({
      select: {
        name: true,
        role: true,
        phone: true,
        id: true,
        status: true,
        profile: true,
      },
      take: take ? take : 20,
      skip: skip ? skip : 0,
    });
    returnObj.statusCode = 200;
    returnObj.Data = users;
  } catch (error) {
    returnObj.Error = error;
    returnObj.statusCode = 500;
  }
  return returnObj;
};

export const getAllAgents = async () => {
  const returnObj = ResponseObj;
  try {
    const users = await prisma.user.findMany({
      where: {
        role: "AGENT",
      },
      select: {
        name: true,
        role: true,
        phone: true,
        id: true,
        status: true,
        profile: true,
      },
      take: take ? take : 20,
      skip: skip ? skip : 0,
    });
    returnObj.statusCode = 200;
    returnObj.Data = users;
  } catch (error) {
    returnObj.statusCode = 500;
    returnObj.Error = error;
  }
  return returnObj;
};

export const getAdminUsers = async () => {
  const returnObj = ResponseObj;
  try {
    const users = await prisma.user.findMany({
      where: {
        role: "ADMIN",
      },
      select: {
        name: true,
        role: true,
        phone: true,
        id: true,
        status: true,
        profile: true,
      },
      take: take ? take : 20,
      skip: skip ? skip : 0,
    });
    returnObj.statusCode = 200;
    returnObj.Data = users;
  } catch (error) {
    returnObj.Error = error;
    returnObj.statusCode = 500;
  }
  return returnObj;
};

export const loginUser = async (req) => {
  const returnObj = ResponseObj;
  try {
    const { phone, password } = req.body;

    const user = await prisma.user.findFirst({
      where: {
        phone: phone,
      },
    });
    if (user) {
      const comparePasswrod = compareSync(password, user.password);
      if (comparePasswrod) {
        const accessToken = generateToken(user);
        returnObj.accessToken = accessToken;
        (returnObj.message = "success"), (returnObj.statusCode = 200);
      } else {
        returnObj.statusCode = 400;
        returnObj.message = "စကားဝှက်မှားယွင်းနေပါသည်";
      }
    } else {
      returnObj.statusCode = 400;
      returnObj.message = "အသုံးပြုသူမရှိပါ";
    }
  } catch (error) {
    returnObj.Error = error;
    returnObj.statusCode = 500;
  }
  return returnObj;
};

export const createUser = async (req) => {
  const returnObj = ResponseObj;
  try {
    const { phone, name, password, address, email, nrc, bio } = req.body;
    const hasPhone = await prisma.user.findFirst({
      where: {
        phone: phone,
      },
    });
    const hasNrc = await prisma.profile.findFirst({
      where: {
        nrc: nrc,
      },
    });
    const hasEmail = await prisma.profile.findFirst({
      where: {
        email: email,
      },
    });
    if (hasPhone) {
      returnObj.statusCode = 400;
      returnObj.message = "၄င်းဖုန်းနံပါတ်အသုံးပြုပြီးသားဖြစ်သည်";
    } else if (hasNrc) {
      returnObj.statusCode = 400;
      returnObj.message = "၄င်းမှတ်ပုံတင်အားအသုံးပြုပြီးဖြစ်သည်";
    } else if (hasEmail) {
      returnObj.statusCode = 400;
      returnObj.message = "၄င်း အီးမေးလ်အားအသုံးပြုပြီးဖြစ်သည်";
    } else {
      const hashPassword = hashSync(password, 12);
      const user = await prisma.user.create({
        data: {
          phone: req.body.phone,
          password: hashPassword,
          name: name,
          profile: {
            create: {
              bio: bio,
              email: email,
              nrc: nrc,
              address: address,
            },
          },
        },
      });
      if (user) {
        returnObj.statusCode = 201;
        (returnObj.message = "အသုံးပြုသူဖန်တီးမှု့အောင်မြင်ပါသည်"),
          (returnObj.Data = {
            userPassword: password,
            user: user,
          });
      } else {
        returnObj.statusCode = 400;
        returnObj.message = "အသုံးပြုသူဖန်တီးမှု့မအောင်မြင်ပါ";
      }
    }
  } catch (error) {
    returnObj.Error = error;
    returnObj.statusCode = 500;
  }
  return returnObj;
};

export const updateUser = async (req) => {
  const returnObj = ResponseObj;
  try {
    const { phone, name, password, address, email, nrc, bio } = req.body;
    const user = await prisma.user.update({
      where: {
        id: id,
      },
      data: {
        name: name,
        phone: phone,
        password: password,
        profile: {
          update: {
            email: email,
            nrc: nrc,
            address: address,
            bio: bio,
          },
        },
      },
    });
    if (user) {
      returnObj.statusCode = 200;
      returnObj.message = "တည်းဖြတ်မှု့အောင်မြင်ပါသည်";
      returnObj.Data = user;
    } else {
      returnObj.statusCode = 400;
      returnObj.message = "တည်းဖြတ်မှု့မအောင်မြင်ပါ";
    }
  } catch (error) {
    returnObj.Error = error;
    returnObj.statusCode = 500;
  }
  return returnObj;
};

export const deleteUser = async (req) => {
  const returnObj = ResponseObj;
  try {
    const { id } = req.body;
    const user = await prisma.user.delete({
      where: {
        id: id,
      },
    });
    if (user) {
      returnObj.statusCode = 200;
      returnObj.message = "ပယ်ဖျက်ခြင်းအောင်မြင်ပါသည်";
    } else {
      returnObj.statusCode = 400;
      returnObj.message = "ပယ်ဖျက်ခြင်းမအောင်မြင်ပါ";
    }
  } catch (error) {
    returnObj.Error = error;
    returnObj.statusCode = 500;
  }
  return returnObj;
};

export const changeAgentPassword = async (req) => {
  const returnObj = ResponseObj;
  try {
    const { id, password } = req.body;
    const hashPassword = hashSync(password, 12);
    const user = await prisma.user.update({
      where: {
        id: id,
      },
      data: {
        password: hashPassword,
      },
    });
    if (user) {
      returnObj.statusCode = 200;
      returnObj.message = "စကားဝှက်ပြောင်းလဲခြင်းအောင်မြင်ပါသည်";
      returnObj.Data = {
        userPassword: password,
      };
    } else {
      returnObj.statusCode = 400;
      returnObj.message = "စကားဝှက်ပြောင်းလဲခြင်းမအောင်မြင်ပါ";
    }
  } catch (error) {
    returnObj.Error = error;
    returnObj.statusCode = 500;
  }
  return returnObj;
};

export const changeStatus = async (req) => {
  const returnObj = ResponseObj;
  try {
    const { id, status } = req.body;
    const user = await prisma.user.update({
      where: {
        id: id,
      },
      data: {
        role: status,
      },
    });
    if (user) {
      returnObj.statusCode = 200;
      returnObj.message = "အခြေအနေပြောင်းလဲခြင်းအောင်မြင်ပါသည်";
    } else {
      returnObj.statusCode = 400;
      returnObj.message = "အခြေအနေပြောင်းလဲခြင်းမအောင်မြင်ပါ";
    }
  } catch (error) {
    returnObj.Error = error;
    returnObj.statusCode = 500;
  }
  return returnObj;
};

export const changeRole = async (req) => {
  const returnObj = ResponseObj;
  try {
    const { id, role } = req.body;
    const user = await prisma.user.update({
      where: {
        id: id,
      },
      data: {
        role: role,
      },
    });
    if (user) {
      returnObj.statusCode = 200;
      returnObj.message = "အခြေအနေပြောင်းလဲခြင်းအောင်မြင်ပါသည်";
    } else {
      returnObj.statusCode = 400;
      returnObj.message = "အခြေအနေပြောင်းလဲခြင်းမအောင်မြင်ပါ";
    }
  } catch (error) {
    returnObj.Error = error;
    returnObj.statusCode = 500;
  }
  return returnObj;
};

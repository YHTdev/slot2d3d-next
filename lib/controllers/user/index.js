import { PrismaClient } from "prisma/prisma-client";
import { hashSync, compareSync } from "bcrypt";

import { generateToken } from "../../JWT";

const prisma = new PrismaClient();
export const createUser = async (req, res) => {
  let returnObj = {
    statusCode: 500,
    message: null,
    data: null,
    errors: [],
  };
  try {
    const user = prisma.user.findFirst({
      where: {
        email: req.body.email,
      },
    });
    if (user) {
      returnObj.statusCode = 400;
      returnObj.message = "အသုံးပြုသူရှိနေပြီးသားဖြစ်သည်";
    } else {
      const hashPassword = hashSync(req.body.password, 12);

      const user = await prisma.user.create({
        data: {
          email: req.body.email,
          password: hashPassword,
          name: req.body.name,
          isAdmin: false,
          isAgent: true,
          isSuperAdmin: false,
          profile: {
            create: {
              bio: req.body.bio,
              phone: req.body.phone,
              address: req.body.address,
              nrc: req.body.nrc,
            },
          },
        },
      });

      if (user) {
        returnObj.statusCode = 201;
        returnObj.message = "ဖန်တီးမှု့အောင်မြင်ပါသည်";
      } else {
        returnObj.statusCode = 400;
        returnObj.message = "ဖန်တီမှု့မအောင်မြင်ပါ";
      }
    }
  } catch (error) {
    returnObj.statusCode = 500;
    returnObj.message = error;
  }
  return returnObj;
};

export const getUsers = async (req, res) => {
  let returnObj = {
    statusCode: 500,
    message: null,
    data: null,
    errors: [],
  };
  try {
    const users = await prisma.user.findMany({
      include: {
        profile: true,
      },
    });
    returnObj.data = users;
    returnObj.statusCode = 200;
    returnObj.message = "အောင်မြင်ပါသည်";
  } catch (error) {
    returnObj.statusCode = 500;
    returnObj.message = error;
  }
  return returnObj;
};

export const loginUser = async (req, res) => {
  let returnObj = {
    statusCode: 500,
    message: null,
    data: null,
    errors: [],
  };
  try {
    const user = await prisma.user.findFirst({
      where: {
        email: req.body.email,
      },
    });
    if (user) {
      const comparePassword = compareSync(req.body.password, user.password);
      if (comparePassword) {
        const accessToken = generateToken(user);

        returnObj.message = "အောင်မြင်ပါသည်";
        returnObj.data = {
          accessToken: accessToken,
        };
        returnObj.statusCode = 200;
      } else {
        returnObj.statusCode = 400;
        returnObj.message = "စကားဝှက် မှားယွင်းနေပါသည်";
      }
    } else {
      returnObj.statusCode = 400;
      returnObj.message = "အီးမေးလ်မရှိပါ";
    }
  } catch (error) {
    res.status(500).json(error);
  }
  return returnObj;
};

export const UpdateUser = async (req, res) => {
  let returnObj = {
    statusCode: 500,
    message: null,
    data: null,
    errors: [],
  };
  try {
    const user = await prisma.user.update({
      data: {
        email: req.body.email,
        name: req.body.name,
        profile: {
          update: {
            phone: req.body.phone,
            address: req.body.address,
            nrc: req.body.nrc,
          },
        },
      },
    });
    if (user) {
      returnObj["statusCode"] = 200;
      returnObj["message"] = "တည်ဖြတ်မှု့အောင်မြင်ပါသည်";
    } else {
      returnObj.statusCode = 400;
      returnObj.message = "တည်ဖြတ်မှု့မအောင်မြင်ပါ";
    }
  } catch (error) {
    returnObj.statusCode = 500;
    returnObj.message = error;
  }
  return returnObj;
};

export const getUser = async (req, res) => {
  let returnObj = {
    statusCode: 500,
    message: null,
    data: null,
    errors: [],
  };
  try {
    const { userId } = req.query;
    const user = await prisma.user.findUnique({
      where: {
        id: userId,
      },
    });
    if (user) {
      returnObj["statusCode"] = 200;
      returnObj["message"] = "အောင်မြင်ပါသည်";
      returnObj["data"] = user;
    } else {
      returnObj["statusCode"] = 400;
      returnObj["message"] = "အသုံးပြုသူမရှိပါ";
    }
  } catch (error) {
    returnObj.statusCode = 500;
    returnObj.message = error;
  }
  return returnObj;
};

export const deleteUser = async (req, res) => {
  let returnObj = {
    statusCode: 500,
    message: null,
    data: null,
    errors: [],
  };
  try {
    const { userId } = req.body;
    const user = await prisma.user.delete({
      where: {
        id: userId,
      },
    });
    if (user) {
      returnObj["statusCode"] = 200;
      returnObj["message"] = "အောင်မြင်စွာဖျက်ပြီးသည်";
    } else {
      returnObj["statusCode"] = 400;
      returnObj["message"] = "ဖျက်ခြင်းမအောင်မြင်ပါ";
    }
  } catch (error) {
    returnObj["statusCode"] = 500;
    returnObj["message"] = error;
  }
  return returnObj;
};

export const allUsers = async (req, res) => {
  let returnObj = {
    statusCode: 500,
    message: null,
    data: null,
    errors: [],
  };
  try {
    const users = await prisma.user.findMany({
      include: {
        profile: true,
      },
    });
    returnObj["data"] = users;
    returnObj["statusCode"] = 200;
    returnObj["message"] = "အောင်မြင်ပါသည်";
  } catch (error) {
    returnObj["statusCode"] = 500;
    returnObj["data"] = null;
    returnObj["message"] = error;
  }
  return returnObj;
};

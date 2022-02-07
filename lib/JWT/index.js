import { sign, verify } from "jsonwebtoken";

export const generateToken = (user) => {
  const accessToken = sign(user, process.env.JWT_SECRET || "yht_dev", {
    expiresIn: "1d",
  });
  return accessToken;
};

export const verifyToken = (token) => {
  const user = verify(token, process.env.JWT_SECRET || "yht_dev");
  return user;
};

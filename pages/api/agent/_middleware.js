import { verifyToken } from "../../../lib/JWT";

export default async function middleware(req) {
  try {
    const accessToken = req.cookies["USER_TOKEN"];
    if (authHeader) {
      const user = verifyToken(accessToken);
      if (user) {
        if (user.role === "SYS_ADMIN" || user.role === "AGENT") {
          req.user = user;
        } else {
          return new Response(`You're not Admin`);
        }
      } else {
        return new Response("Unauthenticated");
      }
      if (user) {
      } else {
        return new Response("Unauthenticated");
      }
    }
  } catch (error) {
    return new Response("SystemError");
  }
}

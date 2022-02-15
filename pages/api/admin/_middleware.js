import { verifyToken } from "../../../lib/JWT";

export default async function middleware(req) {
  try {
    const accessToken = req.cookies["USER_TOKEN"];
    if (authHeader) {
      const user = verifyToken(accessToken);
      if (user) {
      } else {
        return new Response("Unauthenticated");
      }
    }
  } catch (error) {
    return new Response("SystemError");
  }
}

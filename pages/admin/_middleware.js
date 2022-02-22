import { verifyToken } from "../../lib/JWT";
import { jsonResponse } from "../../lib/responseHelper";
import { Instance } from "../../Services";

export default async function middleware(req) {
  try {
    const accessToken = req.cookies["USER_TOKEN"];

    if (accessToken) {
      const user = verifyToken(accessToken);

      if (user) {
        if (user.role === "SYS_ADMIN" || user.role === "ADMIN") {
        } else {
          return jsonResponse(401, { message: "Unauthenticated" });
        }
      } else {
        return jsonResponse(401, { message: "Unauthenticated" });
      }
    } else {
      return jsonResponse(401, { message: "Unauthenticated" });
    }
  } catch (error) {
    console.log(error);
    return jsonResponse(500, { message: "System Error" });
  }
}

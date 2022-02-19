
import { verifyToken } from "../../../../lib/JWT";
import { jsonResponse } from "../../../../lib/responseHelper";

export default async function middleware(req) {
  try {
    const accessToken = req.cookies["USER_TOKEN"];

    if (accessToken) {
      const user = verifyToken(accessToken);
      if (user) {
      } else {
        jsonResponse(401,{message:'Unauthenticated'})
      }
    } else {
      jsonResponse(401,{message:'Unauthenticated'})
    }
  } catch (error) {
    jsonResponse(500,error)
  }
}

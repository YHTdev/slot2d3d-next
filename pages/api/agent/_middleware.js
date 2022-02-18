import { NextResponse } from "next/server";
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
          return NextResponse.json({
            message: `You're not agent.`,
            statusCode: 401,
          });
        }
      } else {
        return NextResponse.json({
          message: "Unauthenticated",
          statusCode: 401,
        });
      }
      if (user) {
      } else {
        return NextResponse.json({
          message: "Unauthenticated",
          statusCode: 401,
        });
      }
    } else {
      return NextResponse.json({
        message: "Unauthenticated",
        statusCode: 401,
      });
    }
  } catch (error) {
    return NextResponse.json({
      message: "System error",
      statusCode: 500,
    });
  }
}

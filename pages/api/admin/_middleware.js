import { NextResponse } from "next/server";
import { verifyToken } from "../../../lib/JWT";

export default async function middleware(req) {
  try {
    const accessToken = req.cookies["USER_TOKEN"];

    if (accessToken) {
      const user = verifyToken(accessToken);

      if (user) {
        if (user.role === "SYS_ADMIN" || user.role === "ADMIN") {
        } else {
          return NextResponse.json({
            message: `You're not Admin`,
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
    return NextResponse({
      message: JSON.stringify(error),
      statusCode: 500,
    });
  }
}

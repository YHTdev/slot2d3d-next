
import { verifyToken } from '../../../lib/JWT'
import { jsonResponse } from '../../../lib/responseHelper'

export default async function middleware (req) {
  try {
    const accessToken = req.cookies['USER_TOKEN']
    if (authHeader) {
      const user = verifyToken(accessToken)
      if (user) {
        if (user.role === 'SYS_ADMIN' || user.role === 'AGENT') {
          req.user = user
        } else {
          return jsonResponse(401, { message: 'Unauthenticated' })
        }
      } else {
        return jsonResponse(401, { message: 'Unauthenticated' })
      }
    } else {
      return jsonResponse(401, { message: 'Unauthenticated' })
    }
  } catch (error) {
    return jsonResponse(500, { message: 'System Error' })
  }
}

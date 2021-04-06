import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'

interface ITokenPayload {
  id: string
  iat: number,
  exp: number
}

const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  try {
    const { authorization } = req.headers

    if (!authorization) {
      return res.status(401).send()
    }

    const token = authorization.replace('Bearer', '').trim()
    const data = jwt.verify(token, 'secret')
    const { id } = data as ITokenPayload

    req.userId = id

    next()
  } catch {
    return res.status(401).send()
  }
}

export default authMiddleware

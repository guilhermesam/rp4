import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'
import { Participant } from '../../entities'

export default function authMiddleware (
  req: Request, res: Response, next: NextFunction
) {
  const authHeader = req.headers.authorization

  if (!authHeader) return res.status(401).send()

  const token = authHeader.replace('Bearer', '').trim()

  jwt.verify(token, 'secret', (error: any, participant: Participant) => {
    if (error) return res.status(403).send()

    req.participantId = participant.id
    next()
  })
}

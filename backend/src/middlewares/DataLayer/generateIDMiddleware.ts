import { v4 as uuidv4 } from 'uuid'
import { NextFunction, Request, Response } from 'express'

const generateIDMiddleware = function (req: Request, res: Response, next: NextFunction) {
  if (!req.body.id) {
    req.body.id = uuidv4()
  }
  next()
}

export default generateIDMiddleware

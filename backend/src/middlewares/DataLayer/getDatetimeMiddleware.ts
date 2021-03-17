import { Request, Response, NextFunction } from 'express'

const getDatetimeMiddleware = function (req: Request, res: Response, next: NextFunction) {
  req.body.datetime = new Date()
  next()
}

export default getDatetimeMiddleware

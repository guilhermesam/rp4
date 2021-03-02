import { Request, Response, NextFunction } from 'express'

const getDatetimeMiddleware = function (req: Request, res: Response, next: NextFunction) {
  if (req.path.includes('/auctions/create')) {
    req.body.start = new Date().toLocaleString().slice(0, 19).replace('T', ' ')
  }
  next()
}

export default getDatetimeMiddleware

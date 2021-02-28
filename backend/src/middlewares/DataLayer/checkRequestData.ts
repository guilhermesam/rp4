import { Request, Response, NextFunction } from 'express'

const checkResponseData = function (req: Request, res: Response, next: NextFunction) {
  if (Object.keys(req.body).length === 0) {
    return res.send('Data not provided in request object!').sendStatus(400)
  } else {
    next()
  }
}

export default checkResponseData

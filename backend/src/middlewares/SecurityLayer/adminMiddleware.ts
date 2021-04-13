import { NextFunction, Request, Response } from 'express'
import AuctioneersRepository from '../../repositories/implementations/Auctioneer/AuctioneersRepository'

const adminMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  const repository = new AuctioneersRepository()
  const id = req.body.userId
  const admin = await repository.searchById(id)

  if (admin) {
    next()
  } else {
    return res.status(403).send()
  }
}

export default adminMiddleware

import { Request, Response } from 'express'
import createAuctionsUseCase from './CreateAuctionsUseCase'

class CreateAuctionsController {
  handle (request: Request, response: Response) {
    const {
      id,
      items,
      auctioneerId
    } = request.body
    const start: Date = request.body.datetime

    createAuctionsUseCase.execute({ start, id, items, auctioneerId })
      .then(() => {
        return response.status(201).send()
      })
      .catch((error) => {
        return response.status(400).json({
          message: error.message || 'Unexpected error'
        })
      })
  }
}

export default new CreateAuctionsController()

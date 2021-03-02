import { Request, Response } from 'express'
import CreateAuctionsUseCase from './CreateAuctionsUseCase'

class CreateAuctionsController {
  createHandle (request: Request, response: Response) {
    try {
      const createAuctionsUseCase = new CreateAuctionsUseCase()

      const start: string = request.body.start
      const id: string = request.body.id
      const items: string[] = request.body.items

      createAuctionsUseCase.create({ start, id, items })

      return response.status(201).send()
    } catch (error) {
      return response.status(400).json({
        message: error.message || 'Unexpected error'
      })
    }
  }
}

export default new CreateAuctionsController()

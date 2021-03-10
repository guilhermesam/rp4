import { Request, Response } from 'express'
import createAuctionsUseCase from './CreateAuctionsUseCase'

class CreateAuctionsController {
  handle (request: Request, response: Response): Response {
    try {
      const start: string = request.body.date
      const id: string = request.body.id
      const items: string[] = request.body.items

      createAuctionsUseCase.execute({ start, id, items })

      return response.status(201).send()
    } catch (error) {
      return response.status(400).json({
        message: error.message || 'Unexpected error'
      })
    }
  }
}

export default new CreateAuctionsController()

import { Request, Response } from 'express'
import CreateAuctionsUseCase from './CreateAuctionsUseCase'

class CreateAuctionsController {
  handle (request: Request, response: Response) {
    try {
      const createAuctionsUseCase = new CreateAuctionsUseCase()

      const start: string = request.body.start
      const id: string = request.body.id
      const items: string[] = request.body.items

      createAuctionsUseCase.execute({ start, id, items })

      return response.sendStatus(204)
    } catch (error) {
      return response.sendStatus(400).json({
        message: error.message || 'Unexpected error'
      })
    }
  }
}

export default new CreateAuctionsController()

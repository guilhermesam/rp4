import { Request, Response } from 'express'
import finishAuctionsUseCase from './FinishAuctionsUseCase'

class FinishAuctionsController {
  handle (request: Request, response: Response) {
    try {
      const id = request.body.id
      const date = request.body.date

      finishAuctionsUseCase.execute({
        id: id,
        date: date
      })

      return response.status(200).send()
    } catch (error) {
      return response.status(400).json({
        message: error.message || 'Unexpected error'
      })
    }
  }
}

export default new FinishAuctionsController()

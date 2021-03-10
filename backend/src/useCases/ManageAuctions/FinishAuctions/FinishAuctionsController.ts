import { Request, Response } from 'express'
import FinishAuctionsUseCase from './FinishAuctionsUseCase'

class FinishAuctionsController {
  handle (request: Request, response: Response) {
    try {
      const finishAuctionsUseCase = new FinishAuctionsUseCase()
      const id = request.body.id

      finishAuctionsUseCase.execute(id)

      return response.status(200).send()
    } catch (error) {
      return response.status(400).json({
        message: error.message || 'Unexpected error'
      })
    }
  }
}

export default new FinishAuctionsController()

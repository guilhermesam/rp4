import { Request, Response } from 'express'
import finishAuctionsUseCase from './FinishAuctionsUseCase'

class FinishAuctionsController {
  handle (request: Request, response: Response) {
    const id = request.body.id
    const date = request.body.datetime

    finishAuctionsUseCase.execute({
      id: id,
      date: date
    })
      .then((data) => {
        return response.status(200).send(data)
      })
      .catch((error) => {
        return response.status(400).json({
          message: error.message || 'Unexpected error'
        })
      })
  }
}

export default new FinishAuctionsController()

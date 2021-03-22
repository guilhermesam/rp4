import { Request, Response } from 'express'
import updateItemsUseCase from './UpdateItemsUseCase'

class UpdateItemsController {
  handle (request: Request, response: Response) {
    const { id, title, description, minimumBid, imagePath, finishedOff } = request.body

    updateItemsUseCase.execute({
      id,
      title,
      description,
      minimumBid,
      imagePath,
      finishedOff
    })
      .then(() => {
        return response.status(200).send()
      })
      .catch((error) => {
        return response.status(400).json({
          message: error.message || 'Unexpected error'
        })
      })
  }
}

export default new UpdateItemsController()

import { Request, Response } from 'express'
import createItemUseCase from './CreateItemsUseCase'

class CreateItemsController {
  handle (request: Request, response: Response) {
    const {
      title, description, minimumBid, imagePath, finishedOff, categoryId, itemProviderId
    } = request.body
    const id = request.body.id

    createItemUseCase.execute({
      id,
      title,
      description,
      minimumBid,
      imagePath,
      finishedOff,
      categoryId,
      itemProviderId
    })
      .then(() => {
        return response.status(201).send()
      })
      .catch((error) => {
        return response.status(400).json({
          message: error.message || 'Unexpected error occured!'
        })
      })
  }
}

export default new CreateItemsController()

import { Request, Response } from 'express'
import CreateItemUseCase from './CreateItemsUseCase'

class CreateItemsController {
  createHandle (request: Request, response: Response) {
    const { title, description, minimumBid, imagePath, finishedOff } = request.body
    const id = request.body.id
    const createItemUseCase = new CreateItemUseCase()

    try {
      createItemUseCase.create({
        id,
        title,
        description,
        minimumBid,
        imagePath,
        finishedOff
      })
      return response.status(201).send()
    } catch (error) {
      return response.status(400).json({
        message: error.message || 'Unexpected error occured!'
      })
    }
  }
}

export default new CreateItemsController()

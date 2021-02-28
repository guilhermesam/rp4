import { Request, Response } from 'express'
import CreateItemUseCase from './CreateItemsUseCase'

export default class CreateItemController {
  private createItemUseCase: CreateItemUseCase
  constructor (
    createItemUseCase: CreateItemUseCase
  ) {
    this.createItemUseCase = createItemUseCase
  }

  handle (request: Request, response: Response) {
    const { title, description, minimumBid, imagePath, finishedOff } = request.body
    const id = request.body.id

    try {
      this.createItemUseCase.execute({
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

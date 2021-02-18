import { Request, Response } from 'express'
import CreateItemUserCase from './CreateItemsUseCase'

export default class CreateItemController {
  private createItemUseCase: CreateItemUserCase
  constructor (
    createItemUseCase: CreateItemUserCase
  ) {
    this.createItemUseCase = createItemUseCase
  }

  async handle (request: Request, response: Response) {
    const { title, description, minimumBid, imagePath, finishedOff } = request.body

    try {
      await this.createItemUseCase.execute({
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

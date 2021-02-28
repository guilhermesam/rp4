import { Request, Response } from 'express'
import UpdateItemsUseCase from './UpdateItemsUseCase'

export default class UpdateItemsController {
  private updateItemsUseCase : UpdateItemsUseCase

  constructor (updateItemsUseCase : UpdateItemsUseCase) {
    this.updateItemsUseCase = updateItemsUseCase
  }

  handle (request: Request, response: Response) {
    try {
      const { id, title, description, minimumBid, imagePath, finishedOff } = request.body

      this.updateItemsUseCase.execute({
        id,
        title,
        description,
        minimumBid,
        imagePath,
        finishedOff
      })
      return response.status(200).send()
    } catch (error) {
      return response.status(400).json({
        message: error.message || 'Unexpected error'
      })
    }
  }
}

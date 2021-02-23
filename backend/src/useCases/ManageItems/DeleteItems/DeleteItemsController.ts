import { Request, Response } from 'express'
import DeleteItemsUseCase from './DeleteItemsUseCase'

export default class DeleteItemController {
  private deleteItemUseCase: DeleteItemsUseCase
  constructor (
    deleteItemUseCase: DeleteItemsUseCase
  ) {
    this.deleteItemUseCase = deleteItemUseCase
  }

  async handle (request: Request, response: Response) {
    const id = request.body.id

    try {
      await this.deleteItemUseCase.execute({
        id
      })
      return response.status(200).send()
    } catch (error) {
      return response.status(400).json({
        message: error.message || 'Unexpected error occured!'
      })
    }
  }
}

import { Request, Response } from 'express'
import DeleteItemsUseCase from './DeleteItemsUseCase'

class DeleteItemController {
  async handle (request: Request, response: Response) {
    const id: string = request.body.id
    const deleteItemsUseCase = new DeleteItemsUseCase()

    try {
      await deleteItemsUseCase.execute(id)
      return response.status(200).send()
    } catch (error) {
      return response.status(400).json({
        message: error.message || 'Unexpected error occured!'
      })
    }
  }
}

export default new DeleteItemController()

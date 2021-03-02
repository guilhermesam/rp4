import { Request, Response } from 'express'
import DeleteItemsUseCase from './DeleteItemsUseCase'

class DeleteItemController {
  async deleteHandle (request: Request, response: Response) {
    const id = request.body.id
    const deleteItemsUseCase = new DeleteItemsUseCase()

    try {
      await deleteItemsUseCase.delete({
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

export default new DeleteItemController()

import { Request, Response } from 'express'
import deleteItemsUseCase from './DeleteItemsUseCase'

class DeleteItemController {
  async handle (request: Request, response: Response) {
    const id: string = request.body.id

    await deleteItemsUseCase.execute(id)
      .then(() => {
        return response.status(200).send()
      })
      .catch((error) => {
        return response.status(400).json({
          message: error.message || 'Unexpected error occured!'
        })
      })
  }
}

export default new DeleteItemController()

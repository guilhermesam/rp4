import { Request, Response } from 'express'
import UpdateItemsUseCase from './UpdateItemsUseCase'

class UpdateItemsController {
  updateHandle (request: Request, response: Response) {
    try {
      const updateItemsUseCase = new UpdateItemsUseCase()
      const { id, title, description, minimumBid, imagePath, finishedOff } = request.body

      updateItemsUseCase.update({
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

export default new UpdateItemsController()

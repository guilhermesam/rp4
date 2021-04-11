import { Request, Response } from 'express'
import makeAuctionBidsUseCase from './MakeAuctionBidsUseCase'

class MakeAuctionBidsController {
  async handle (request: Request, response: Response) {
    try {
      const { id, datetime, value, participantId, auctionItemId } = request.body

      const result = await makeAuctionBidsUseCase.execute({
        id,
        datetime,
        value,
        auctionItemId,
        participantId
      })

      return response.status(201).json(result)
    } catch (error) {
      return response.status(400).json({
        message: error.message || 'Um erro inesperado ocorreu'
      })
    }
  }
}

export default new MakeAuctionBidsController()

import { Request, Response } from 'express'
import makeAuctionBidsUseCase from './MakeAuctionBidsUseCase'

class MakeAuctionBidsController {
  handle (request: Request, response: Response) {
    const id: string = request.body.id
    const datetime: Date = request.body.datetime
    const value: number = request.body.value
    const participantId: string = request.body.participantId
    const auctionItemId: string = request.body.itemId

    try {
      makeAuctionBidsUseCase.execute({
        id,
        datetime,
        value,
        auctionItemId,
        participantId
      })
      return response.status(201).send()
    } catch (error) {
      return response.status(400).json({
        message: error.message || 'Unexpected error!'
      })
    }
  }
}

export default new MakeAuctionBidsController()

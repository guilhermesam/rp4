import { Request, Response } from 'express'
import makeAuctionBidsUseCase from './MakeAuctionBidsUseCase'

class MakeAuctionBidsController {
  handle (request: Request, response: Response) {
    const id: string = request.body.id
    const datetime: Date = request.body.datetime
    const value: number = request.body.value
    const participantId: string = request.body.participantId
    const auctionItemId: string = request.body.itemId

    makeAuctionBidsUseCase.execute({
      id,
      datetime,
      value,
      auctionItemId,
      participantId
    }).then(() => {
      return response.status(201).send()
    }).catch((error) => {
      return response.status(400).json({
        message: error.message || 'Um erro inesperado ocorreu'
      })
    })
  }
}

export default new MakeAuctionBidsController()

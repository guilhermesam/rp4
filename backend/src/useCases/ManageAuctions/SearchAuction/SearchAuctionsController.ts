import { Request, Response } from 'express'
import SearchAuctionUseCase from './SearchAuctionUseCase'

export default class SearchAuctionsController {
  async searchAuctionsHandle (request: Request, response: Response) {
    try {
      const searchAuctionUseCase = new SearchAuctionUseCase()
      const auctions = await searchAuctionUseCase.searchAuction

      return response.status(200).json(auctions)
    } catch (error) {
      return response.status(400).json({
        message: error.message || 'Unexpected error!'
      })
    }
  }
}

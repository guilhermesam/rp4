import { Request, Response } from 'express'
import SearchAuctionUseCase from './SearchAuctionUseCase'

export default class SearchAuctionsController {
    private searchAuctionUseCase: SearchAuctionUseCase

    constructor (searchAuctionUseCase: SearchAuctionUseCase) {
      this.searchAuctionUseCase = searchAuctionUseCase
    }

    async handle (request: Request, response: Response) {
      const data = request.body
      try {
        if (!data) {
          const items = await this.searchAuctionUseCase.execute()
          return response.json(items).status(200)
        } else {
          const items = await this.searchAuctionUseCase.execute(data)
          return response.json(items).status(200)
        }
      } catch (error) {
        return response.status(400).json({
          message: error.message || 'Unexpected error!'
        })
      }
    }
}

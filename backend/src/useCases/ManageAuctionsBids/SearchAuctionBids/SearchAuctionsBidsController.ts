import { Request, Response } from 'express'
import { IStrategy } from './IStrategy'
import searchAuctionsBidsUseCase from './SearchAuctionsBidsUseCase'

class SearchAuctionsController {
    private strategy: IStrategy

    setStrategy (strategy: IStrategy) {
      this.strategy = strategy
    }

    async handle (request: Request, response: Response) {
      await this.strategy.search(searchAuctionsBidsUseCase, request.params)
        .then((bids) => {
          return response.status(200).json(bids)
        })
        .catch((error) => {
          return response.status(400).json({
            message: error.message || 'Unexpected error!'
          })
        })
    }
}

export default new SearchAuctionsController()

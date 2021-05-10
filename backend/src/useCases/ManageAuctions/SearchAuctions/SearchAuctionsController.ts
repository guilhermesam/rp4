import { Request, Response } from 'express'
import { IStrategy } from './IStrategy'
import searchAuctionsUseCase from './SearchAuctionsUseCase'

class SearchAuctionsController {
  private strategy: IStrategy

  setStrategy (strategy: IStrategy) {
    this.strategy = strategy
  }

  handle (request: Request, response: Response) {
    this.strategy.search(searchAuctionsUseCase, request.params)
      .then((Auctions) => {
        return response.status(200).json(Auctions)
      })
      .catch((error) => {
        return response.status(400).json({
          message: error.message || 'Unexpected error!'
        })
      })
  }
}

export default new SearchAuctionsController()

import { Request, Response } from 'express'
import { IStrategy } from './IStrategy'
import searchAuctioneersUseCase from './SearchAuctioneersUseCase'

class SearchAuctioneersController {
  private strategy: IStrategy

  setStrategy (strategy: IStrategy) {
    this.strategy = strategy
  }

  async handle (request: Request, response: Response) {
    await this.strategy.search(searchAuctioneersUseCase, request.params)
      .then((Auctioneers) => {
        return response.status(200).json(Auctioneers)
      })
      .catch((error) => {
        return response.status(400).json({
          message: error.message || 'Unexpected error!'
        })
      })
  }
}

export default new SearchAuctioneersController()

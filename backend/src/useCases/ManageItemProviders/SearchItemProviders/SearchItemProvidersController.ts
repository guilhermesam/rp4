import { Request, Response } from 'express'
import { IStrategy } from './IStrategy'
import searchItemProvidersUseCase from './SearchItemProvidersUseCase'
class SearchItemProvidersController {
  private strategy: IStrategy

  setStrategy (strategy: IStrategy) {
    this.strategy = strategy
  }

  handle (request: Request, response: Response) {
    this.strategy.search(searchItemProvidersUseCase, request.params)
      .then((items) => {
        return response.status(200).json(items)
      })
      .catch((error) => {
        return response.status(400).json({
          message: error.message || 'Unexpected error!'
        })
      })
  }
}

export default new SearchItemProvidersController()

import { Request, Response } from 'express'
import { IStrategy } from './IStrategy'
import SearchCategoryUseCase from './SearchCategoryUseCase'

class SearchCategoryController {
  private strategy: IStrategy

  setStrategy (strategy: IStrategy) {
    this.strategy = strategy
  }

  async handle (request: Request, response: Response) {
    await this.strategy.search(new SearchCategoryUseCase())
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

export default new SearchCategoryController()

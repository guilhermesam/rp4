import { Request, Response } from 'express'
import { IStrategy } from './IStrategy'
import SearchParticipantsUseCase from './SearchParticipantsUseCase'

class SearchParticipantsController {
  private strategy: IStrategy

  setStrategy (strategy: IStrategy) {
    this.strategy = strategy
  }

  async handle (request: Request, response: Response) {
    try {
      const items = await this.strategy.search(new SearchParticipantsUseCase())

      return response.status(200).json(items)
    } catch (error) {
      return response.status(400).json({
        message: error.message || 'Unexpected error!'
      })
    }
  }
}

export default new SearchParticipantsController()

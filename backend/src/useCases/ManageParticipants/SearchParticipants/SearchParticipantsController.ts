import { Request, Response } from 'express'
import { IStrategy } from './IStrategy'
import searchParticipantsUseCase from './SearchParticipantsUseCase'

class SearchParticipantsController {
  private strategy: IStrategy

  setStrategy (strategy: IStrategy) {
    this.strategy = strategy
  }

  async handle (request: Request, response: Response) {
    await this.strategy.search(searchParticipantsUseCase, request.params)
      .then((participants) => {
        return response.status(200).json(participants)
      })
      .catch((error) => {
        return response.status(400).json({
          message: error.message || 'Unexpected error!'
        })
      })
  }
}

export default new SearchParticipantsController()

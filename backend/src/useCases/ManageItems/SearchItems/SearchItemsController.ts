import { Request, Response } from 'express'
import SearchItemsUseCase from './SearchItemsUseCase'

export default class SearchItemsController {
    private searchItemsUseCase: SearchItemsUseCase

    constructor (searchItemsUseCase: SearchItemsUseCase) {
      this.searchItemsUseCase = searchItemsUseCase
    }

    async handle (request: Request, response: Response) {
      const data = request.body

      try {
        if (!data) {
          const items = await this.searchItemsUseCase.execute()
          return response.json(items).status(200)
        } else {
          const items = await this.searchItemsUseCase.execute(data)
          return response.json(items).status(200)
        }
      } catch (error) {
        return response.status(400).json({
          message: error.message || 'Unexpected error!'
        })
      }
    }
}

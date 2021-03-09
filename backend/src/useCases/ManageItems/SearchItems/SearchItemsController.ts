import { Request, Response } from 'express'
import SearchItemsUseCase from './SearchItemsUseCase'

class SearchItemsController {
  async searchByTitleHandle (request: Request, response: Response) {
    try {
      const data = request.body
      const searchItemsUseCase = new SearchItemsUseCase()
      const item = searchItemsUseCase.searchByTitle(data.title)

      return response.status(200).json(item)
    } catch (error) {
      return response.status(400).json({
        message: error.message || 'Unexpected error!'
      })
    }
  }

  async searchAllHandle (request: Request, response: Response) {
    try {
      const searchItemsUseCase = new SearchItemsUseCase()
      const allItems = await searchItemsUseCase.searchAll()

      return response.status(200).json(allItems)
    } catch (error) {
      return response.status(400).json({
        message: error.message || 'Unexpected error!'
      })
    }
  }

  async searchAvailableHandle (request: Request, response: Response) {
    try {
      const searchItemsUseCase = new SearchItemsUseCase()
      const availableItems = await searchItemsUseCase.searchAvailable()

      return response.status(200).json(availableItems)
    } catch (error) {
      return response.status(400).json({
        message: error.message || 'Unexpected error!'
      })
    }
  }

  async searchAuctionsItemsHandle (request: Request, response: Response) {
    try {
      const searchItemsUseCase = new SearchItemsUseCase()
      const auctionsItems = await searchItemsUseCase.searchAuctionItems()

      return response.status(200).json(auctionsItems)
    } catch (error) {
      return response.status(400).json({
        message: error.message || 'Unexpected error!'
      })
    }
  }
}

export default new SearchItemsController()

import { AuctionItem } from '../../../entities'
import { IStrategy } from './IStrategy'
import SearchItemsUseCase from './SearchItemsUseCase'

class SearchAllItems implements IStrategy {
  async search (searchItemsUseCase: typeof SearchItemsUseCase): Promise<AuctionItem[]> {
    return await searchItemsUseCase.searchAll()
  }
}

class SearchAvailableItems implements IStrategy {
  async search (searchItemsUseCase: typeof SearchItemsUseCase): Promise<AuctionItem[]> {
    return await searchItemsUseCase.searchAvailable()
  }
}

export {
  SearchAllItems,
  SearchAvailableItems
}

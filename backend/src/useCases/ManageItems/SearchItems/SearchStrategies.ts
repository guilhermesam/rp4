import { AuctionItem } from '../../../entities'
import { IStrategy } from './IStrategy'
import SearchItemsUseCase from './SearchItemsUseCase'

class SearchAllItems implements IStrategy {
  async search (searchItemsUseCase: typeof SearchItemsUseCase): Promise<any> {
    return await searchItemsUseCase.searchAll()
  }
}

class SearchAvailableItems implements IStrategy {
  async search (searchItemsUseCase: typeof SearchItemsUseCase): Promise<AuctionItem[]> {
    return await searchItemsUseCase.searchAvailable()
  }
}

class SearchByIdItems implements IStrategy {
  async search (searchItemsUseCase: typeof SearchItemsUseCase, param: any): Promise<any> {
    return await searchItemsUseCase.searchById(param.id)
  }
}

export {
  SearchAllItems,
  SearchAvailableItems,
  SearchByIdItems
}

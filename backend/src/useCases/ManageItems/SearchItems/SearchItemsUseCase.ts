import { AuctionItem } from '../../../entities'
import { SearchItemsRepository } from '../../../repositories/implementations/ManageItems'

export default class SearchItemsUseCase {
  searchByTitle (title: string): Promise<AuctionItem> {
    const searchItemsRepository = new SearchItemsRepository()
    return searchItemsRepository.searchByTitle(title)
  }

  searchAll (): Promise<AuctionItem[]> {
    const searchItemsRepository = new SearchItemsRepository()
    return searchItemsRepository.searchAll()
  }

  searchAvailable (): Promise<AuctionItem[]> {
    const searchItemsRepository = new SearchItemsRepository()
    return searchItemsRepository.searchAvailableItems()
  }

  searchAuctionItems (): Promise<AuctionItem[]> {
    const searchItemsRepository = new SearchItemsRepository()
    return searchItemsRepository.searchAuctionItems()
  }
}

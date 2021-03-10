import { AuctionItem } from '../../../entities'
import AuctionItemsRepository from '../../../repositories/implementations/AuctionItem/AuctionItemsRepository'

export default class SearchItemsUseCase {
  searchAll (): Promise<AuctionItem[]> {
    const auctionItemsRepository = new AuctionItemsRepository()
    return auctionItemsRepository.searchAll()
  }

  searchAvailable (): Promise<AuctionItem[]> {
    const auctionItemsRepository = new AuctionItemsRepository()
    return auctionItemsRepository.searchAvailableItems()
  }
}

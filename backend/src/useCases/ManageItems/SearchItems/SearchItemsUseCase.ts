import { AuctionItem } from '../../../entities'
import AuctionItemsRepository from '../../../repositories/implementations/AuctionItem/AuctionItemsRepository'
import IAuctionItemsRepository from '../../../repositories/implementations/AuctionItem/IAuctionItemsRepository'

class SearchItemsUseCase {
  private auctionItemsRepository: IAuctionItemsRepository<any>

  constructor (auctionItemsRepository?: IAuctionItemsRepository<any>) {
    this.auctionItemsRepository = auctionItemsRepository
  }

  async searchAll (): Promise<AuctionItem[]> {
    return await this.auctionItemsRepository.searchAll()
  }

  async searchAvailable (): Promise<AuctionItem[]> {
    return await this.auctionItemsRepository.searchAvailableItems()
  }

  async searchById (id: string): Promise<AuctionItem> {
    return await this.auctionItemsRepository.searchById(id)
  }
}

export default new SearchItemsUseCase(
  new AuctionItemsRepository()
)

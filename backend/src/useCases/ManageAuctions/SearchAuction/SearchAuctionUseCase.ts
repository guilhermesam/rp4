import { SearchAuctionRepository } from '../../../repositories/implementations/ManageAuctions'
import { Auction } from '../../../entities'

export default class SearchAuctionUseCase {
  searchAuction (id : string): Promise<Auction> {
    const searchItemsRepository = new SearchAuctionRepository()
    return searchItemsRepository.searchById(id)
  }
}

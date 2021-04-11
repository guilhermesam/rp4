import { IStrategy } from './IStrategy'
import SearchAuctionsBidsUseCase from './SearchAuctionsBidsUseCase'

class SearchHighestBid implements IStrategy {
  async search (searchAuctionsBidsUseCase: typeof SearchAuctionsBidsUseCase, param: any): Promise<any> {
    return await searchAuctionsBidsUseCase.getHighestBid(param.id)
  }
}

export {
  SearchHighestBid
}

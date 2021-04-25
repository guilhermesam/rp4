import { AuctionBid } from '../../../entities'
import AuctionIBidsRepository from '../../../repositories/implementations/AuctionBid/AuctionBidsRepository'
import IAuctionBidsRepository from '../../../repositories/implementations/AuctionBid/IAuctionBidsRepository'

class SearchAuctionsBidsUseCase {
  constructor (private auctionsBidsRepository: IAuctionBidsRepository<any> = new AuctionIBidsRepository()) {
  }

  async getHighestBid (id: string): Promise<AuctionBid> {
    return await this.auctionsBidsRepository.getHighestBid(id)
  }
}

export default new SearchAuctionsBidsUseCase()

import { AuctionBid } from '../../../entities'
import AuctionIBidsRepository from '../../../repositories/implementations/AuctionBid/AuctionBidsRepository'
import IAuctionIBidsRepository from '../../../repositories/implementations/AuctionBid/IAuctionBidsRepository'

class SearchAuctionsBidsUseCase {
    private auctionsBidsRepository: IAuctionIBidsRepository<any>

    constructor (auctionsBidsRepository?: IAuctionIBidsRepository<any>) {
      this.auctionsBidsRepository = auctionsBidsRepository
    }

    async getHighestBid (id: string): Promise<AuctionBid> {
      return await this.auctionsBidsRepository.getHighestBid(id)
    }
}

export default new SearchAuctionsBidsUseCase(
  new AuctionIBidsRepository()
)

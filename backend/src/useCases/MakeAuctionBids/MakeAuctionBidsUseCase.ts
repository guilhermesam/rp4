import AuctionBidsRepository from '../../repositories/implementations/AuctionBid/AuctionBidsRepository'
import IAuctionBidsRepository from '../../repositories/implementations/AuctionBid/IAuctionBidsRepository'
import AuctionsBidsMapper from '../../repositories/implementations/AuctionBid/AuctionBidsMapper'
import IAuctionBidsDTO from '../../repositories/implementations/AuctionBid/IAuctionBidsDTO'

class MakeAuctionBidsUseCase {
  private auctionBidsRepository: IAuctionBidsRepository<any>

  constructor (auctionBidsRepository: IAuctionBidsRepository<any>) {
    this.auctionBidsRepository = auctionBidsRepository
  }

  execute (data: IAuctionBidsDTO) {
    const bidData = AuctionsBidsMapper.toPersistence(data)
    this.auctionBidsRepository.create(bidData)
  }
}

export default new MakeAuctionBidsUseCase(
  new AuctionBidsRepository()
)

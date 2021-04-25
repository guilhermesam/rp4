import AuctionBidsRepository from '../../../repositories/implementations/AuctionBid/AuctionBidsRepository'
import IAuctionBidsRepository from '../../../repositories/implementations/AuctionBid/IAuctionBidsRepository'
import AuctionsBidsMapper from '../../../repositories/implementations/AuctionBid/AuctionBidsMapper'
import IAuctionBidsDTO from '../../../repositories/implementations/AuctionBid/IAuctionBidsDTO'
import { AuctionBid } from '../../../entities'

class MakeAuctionBidsUseCase {
  constructor (
    private auctionBidsRepository: IAuctionBidsRepository
  ) {
  }

  async execute (data: IAuctionBidsDTO): Promise<AuctionBid> {
    const bidData = AuctionsBidsMapper.toPersistence(data)

    const auctionBid = await this.auctionBidsRepository.create(bidData)
    return auctionBid
  }
}

export default new MakeAuctionBidsUseCase(
  new AuctionBidsRepository()
)

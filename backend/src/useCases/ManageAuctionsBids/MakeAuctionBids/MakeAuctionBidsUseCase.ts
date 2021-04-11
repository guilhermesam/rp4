import AuctionBidsRepository from '../../../repositories/implementations/AuctionBid/AuctionBidsRepository'
import IAuctionBidsRepository from '../../../repositories/implementations/AuctionBid/IAuctionBidsRepository'
import AuctionsBidsMapper from '../../../repositories/implementations/AuctionBid/AuctionBidsMapper'
import IAuctionBidsDTO from '../../../repositories/implementations/AuctionBid/IAuctionBidsDTO'
import IAuctionItemsRepository from '../../../repositories/implementations/AuctionItem/IAuctionItemsRepository'
import AuctionItemsRepository from '../../../repositories/implementations/AuctionItem/AuctionItemsRepository'
import { AuctionBid } from '../../../entities'

class MakeAuctionBidsUseCase {
  constructor (
    private auctionBidsRepository: IAuctionBidsRepository,
    private auctionItemsRepository: IAuctionItemsRepository<any>
  ) {
  }

  async execute (data: IAuctionBidsDTO): Promise<AuctionBid> {
    const bidData = AuctionsBidsMapper.toPersistence(data)

    const auctionBid = await this.auctionBidsRepository.create(bidData)
    return auctionBid
  }
}

export default new MakeAuctionBidsUseCase(
  new AuctionBidsRepository(),
  new AuctionItemsRepository()
)

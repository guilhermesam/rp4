import AuctionBidsRepository from '../../repositories/implementations/AuctionBid/AuctionBidsRepository'
import IAuctionBidsRepository from '../../repositories/implementations/AuctionBid/IAuctionBidsRepository'
import AuctionsBidsMapper from '../../repositories/implementations/AuctionBid/AuctionBidsMapper'
import IAuctionBidsDTO from '../../repositories/implementations/AuctionBid/IAuctionBidsDTO'
import IAuctionItemsRepository from '../../repositories/implementations/AuctionItem/IAuctionItemsRepository'
import AuctionItemsRepository from '../../repositories/implementations/AuctionItem/AuctionItemsRepository'

class MakeAuctionBidsUseCase {
  private auctionBidsRepository: IAuctionBidsRepository<any>
  private auctionItemsRepository: IAuctionItemsRepository<any>

  constructor (
    auctionBidsRepository: IAuctionBidsRepository<any>,
    auctionItemsRepository: IAuctionItemsRepository<any>
  ) {
    this.auctionBidsRepository = auctionBidsRepository
    this.auctionItemsRepository = auctionItemsRepository
  }

  async execute (data: IAuctionBidsDTO) {
    const bidData = AuctionsBidsMapper.toPersistence(data)
    const minimumBidValue = await this.auctionItemsRepository.getMinimumBidValue(bidData.auctionItemId)

    if (bidData.value < minimumBidValue) {
      throw new Error('O valor do lance é menor do que o lance mínimo do item!')
    }

    this.auctionBidsRepository.create(bidData)
  }
}

export default new MakeAuctionBidsUseCase(
  new AuctionBidsRepository(),
  new AuctionItemsRepository()
)

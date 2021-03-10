import AuctionItemsRepository from '../../../repositories/implementations/AuctionItem/AuctionItemsRepository'
import AuctionsRepository from '../../../repositories/implementations/Auction/AuctionsRepository'
import AuctionBidsRepository from '../../../repositories/implementations/AuctionBid/AuctionBidsRepository'
import AuctionSalesRepository from '../../../repositories/implementations/AuctionSale/AuctionSalesRepository'

import IAuctionItemsRepository from '../../../repositories/implementations/AuctionItem/IAuctionItemsRepository'
import IAuctionsRepository from '../../../repositories/implementations/Auction/IAuctionsRepository'
import IAuctionBidsRepository from '../../../repositories/implementations/AuctionBid/IAuctionBidsRepository'
import IAuctionSalesRepository from '../../../repositories/implementations/AuctionSale/IAuctionSalesRepository'
import AuctionSalesMapper from '../../../repositories/implementations/AuctionSale/AuctionSalesMapper'
import IFinishAuctionsDTO from './IFinishAuctionDTO'

class FinishAuctionsUseCase {
  private auctionItemsRepository: IAuctionItemsRepository
  private auctionsRepository: IAuctionsRepository
  private auctionBidsRepository: IAuctionBidsRepository
  private auctionSalesRepository: IAuctionSalesRepository

  constructor (
    auctionItemsRepository: IAuctionItemsRepository,
    auctionsRepository: IAuctionsRepository,
    auctionBidsRepository: IAuctionBidsRepository,
    auctionSalesRepository: IAuctionSalesRepository
  ) {
    this.auctionItemsRepository = auctionItemsRepository
    this.auctionsRepository = auctionsRepository
    this.auctionBidsRepository = auctionBidsRepository
    this.auctionSalesRepository = auctionSalesRepository
  }

  async execute (data: IFinishAuctionsDTO): Promise<void> {
    const items = await this.auctionItemsRepository.searchItemsInAuction(data.id)

    items.forEach(async element => {
      const bid = await this.auctionBidsRepository.getHighestBid(element.id)

      const itemData = AuctionSalesMapper.toPersistence({
        id: data.id,
        date: data.date,
        value: bid.value,
        auctionItemId: bid.auctionItemId,
        participantId: bid.participantId
      })

      this.auctionSalesRepository.create(itemData)
    })

    ;(items).forEach(async element => {
      if (element.sold !== 1) {
        await this.auctionItemsRepository.setAvailableStatus(element.id)
      }
    })

    this.auctionsRepository.close(data.id)
  }
}

export default new FinishAuctionsUseCase(
  new AuctionItemsRepository(),
  new AuctionsRepository(),
  new AuctionBidsRepository(),
  new AuctionSalesRepository()
)

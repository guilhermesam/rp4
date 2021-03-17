import AuctionItemsRepository from '../../../repositories/implementations/AuctionItem/AuctionItemsRepository'
import AuctionsRepository from '../../../repositories/implementations/Auction/AuctionsRepository'
import AuctionBidsRepository from '../../../repositories/implementations/AuctionBid/AuctionBidsRepository'
import AuctionSalesRepository from '../../../repositories/implementations/AuctionSale/AuctionSalesRepository'

import IAuctionItemsRepository from '../../../repositories/implementations/AuctionItem/IAuctionItemsRepository'
import IAuctionsRepository from '../../../repositories/implementations/Auction/IAuctionsRepository'
import IAuctionBidsRepository from '../../../repositories/implementations/AuctionBid/IAuctionBidsRepository'
import IAuctionSalesRepository from '../../../repositories/implementations/AuctionSale/IAuctionSalesRepository'
import AuctionSalesMapper from '../../../repositories/implementations/AuctionSale/AuctionSalesMapper'
import IFinishAuctionsDTO from './IFinishAuctionsDTO'

class FinishAuctionsUseCase {
  private auctionItemsRepository: IAuctionItemsRepository<any>
  private auctionsRepository: IAuctionsRepository<any>
  private auctionBidsRepository: IAuctionBidsRepository<any>
  private auctionSalesRepository: IAuctionSalesRepository<any>

  constructor (
    auctionItemsRepository: IAuctionItemsRepository<any>,
    auctionsRepository: IAuctionsRepository<any>,
    auctionBidsRepository: IAuctionBidsRepository<any>,
    auctionSalesRepository: IAuctionSalesRepository<any>
  ) {
    this.auctionItemsRepository = auctionItemsRepository
    this.auctionsRepository = auctionsRepository
    this.auctionBidsRepository = auctionBidsRepository
    this.auctionSalesRepository = auctionSalesRepository
  }

  async execute (data: IFinishAuctionsDTO): Promise<void> {
    const items = await this.auctionItemsRepository.searchItemsInAuction(data.id)

    ;(items).forEach(async element => {
      const highestBid = await this.auctionBidsRepository.getHighestBid(element.id)

      if (!highestBid) {
        this.auctionItemsRepository.setAvailableStatus(element.id)
      } else {
        const saleData = AuctionSalesMapper.toPersistence({
          id: element.id,
          date: data.date,
          value: highestBid.value,
          participantId: highestBid.participantId,
          auctionItemId: element.id
        })
        this.auctionSalesRepository.create(saleData)
        this.auctionItemsRepository.setSoldStatus(element.id)
      }
    })
  }
}

export default new FinishAuctionsUseCase(
  new AuctionItemsRepository(),
  new AuctionsRepository(),
  new AuctionBidsRepository(),
  new AuctionSalesRepository()
)

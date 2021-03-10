import { AuctionItem } from '../../../entities'

import IAuctionSalesDTO from '../../../repositories/implementations/AuctionSale/IAuctionSalesDTO'

import AuctionItemsRepository from '../../../repositories/implementations/AuctionItem/AuctionItemsRepository'
import AuctionsRepository from '../../../repositories/implementations/Auction/AuctionsRepository'
import AuctionBidsRepository from '../../../repositories/implementations/AuctionBid/AuctionBidsRepository'
import AuctionSalesRepository from '../../../repositories/implementations/AuctionSale/AuctionSalesRepository'

import IAuctionItemsRepository from '../../../repositories/implementations/AuctionItem/IAuctionItemsRepository'
import IAuctionsRepository from '../../../repositories/implementations/Auction/IAuctionsRepository'
import IAuctionBidsRepository from '../../../repositories/implementations/AuctionBid/IAuctionBidsRepository'
import IAuctionSalesRepository from '../../../repositories/implementations/AuctionSale/IAuctionSalesRepository'
import AuctionSalesMapper from '../../../repositories/implementations/AuctionSale/AuctionSalesMapper'

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

  async execute (data: IAuctionSalesDTO) {
    const items = await this.auctionItemsRepository.searchItemsInAuction(data.id)

    this.setAvailableStatus(items)
    this.registerItemSales(data.id, data.date, items)

    this.auctionsRepository.close(data.id)
  }

  private registerItemSales (id: string, date: string, items: AuctionItem[]) {
    items.forEach(async element => {
      const bid = await this.auctionBidsRepository.getHighestBid(element.id)

      const data = AuctionSalesMapper.toPersistence({
        id: id,
        date: date,
        value: bid.value,
        auctionItemId: bid.auctionItemId,
        participantId: bid.participantId
      })

      this.auctionSalesRepository.create(data)
    })
  }

  private setAvailableStatus (items: AuctionItem[]) {
    ;(items).forEach(element => {
      if (element.sold !== 1) {
        this.auctionItemsRepository.setAvailableStatus(element.id)
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

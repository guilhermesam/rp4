import AuctionItemsRepository from '../../../repositories/implementations/AuctionItem/AuctionItemsRepository'
import AuctionsRepository from '../../../repositories/implementations/Auction/AuctionsRepository'

import IAuctionsDTO from '../../../repositories/implementations/Auction/IAuctionsDTO'

import IAuctionsRepository from '../../../repositories/implementations/Auction/IAuctionsRepository'
import IAuctionItemsRepository from '../../../repositories/implementations/AuctionItem/IAuctionItemsRepository'
import AuctionsMapper from '../../../repositories/implementations/Auction/AuctionsMapper'

class CreateAuctionsUseCase {
  private auctionItemsRepository: IAuctionItemsRepository
  private auctionsRepository: IAuctionsRepository

  constructor (
    auctionItemsRepository: IAuctionItemsRepository,
    auctionsRepository: IAuctionsRepository
  ) {
    this.auctionItemsRepository = auctionItemsRepository
    this.auctionsRepository = auctionsRepository
  }

  execute (data: IAuctionsDTO): void {
    const auctionsData = AuctionsMapper.toPersistence(data)
    this.auctionsRepository.create(auctionsData)

    data.items.forEach(async (itemId) => {
      if ((await this.auctionItemsRepository.searchById(itemId)).finishedOff === 1) {
        throw new Error('Item already alocated to auction')
      }
      await this.auctionItemsRepository.setUnavailableStatus(itemId)
      await this.auctionItemsRepository.assignToAuction(data.id, itemId)
    })
  }
}

export default new CreateAuctionsUseCase(
  new AuctionItemsRepository(),
  new AuctionsRepository()
)

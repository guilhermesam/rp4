import AuctionItemsRepository from '../../../repositories/implementations/AuctionItem/AuctionItemsRepository'
import AuctionsRepository from '../../../repositories/implementations/Auction/AuctionsRepository'

import IAuctionsDTO from '../../../repositories/implementations/Auction/IAuctionsDTO'

import IAuctionsRepository from '../../../repositories/implementations/Auction/IAuctionsRepository'
import IAuctionItemsRepository from '../../../repositories/implementations/AuctionItem/IAuctionItemsRepository'
import AuctionsMapper from '../../../repositories/implementations/Auction/AuctionsMapper'
import ITransactionManager from '../../../repositories/transactions/ITransactionManager'
import TypeORMTransactionManager from '../../../repositories/transactions/TypeORMTransactionManager'

class CreateAuctionsUseCase {
  private auctionItemsRepository: IAuctionItemsRepository<any>
  private auctionsRepository: IAuctionsRepository<any>
  private transactionManager: ITransactionManager

  constructor (
    auctionItemsRepository: IAuctionItemsRepository<any>,
    auctionsRepository: IAuctionsRepository<any>,
    transactionManager: ITransactionManager
  ) {
    this.auctionItemsRepository = auctionItemsRepository
    this.auctionsRepository = auctionsRepository
    this.transactionManager = transactionManager
  }

  async execute (data: IAuctionsDTO): Promise<void> {
    const auctionsData = AuctionsMapper.toPersistence(data)
    this.transactionManager.addAction(this.auctionsRepository.create, [auctionsData])

    data.items.forEach(async (itemId) => {
      if ((await this.auctionItemsRepository.searchById(itemId)).finishedOff === -1) {
        throw new Error('Item already alocated to auction')
      }
      this.transactionManager.addAction(this.auctionItemsRepository.setUnavailableStatus, [itemId])
      this.transactionManager.addAction(this.auctionItemsRepository.assignToAuction, [data.id, itemId])
    })

    this.transactionManager.run()
  }
}

export default new CreateAuctionsUseCase(
  new AuctionItemsRepository(),
  new AuctionsRepository(),
  new TypeORMTransactionManager()
)

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
import ITransactionManager from '../../../repositories/transactions/ITransactionManager'
import TypeORMTransactionManager from '../../../repositories/transactions/TypeORMTransactionManager'

class FinishAuctionsUseCase {
  private auctionItemsRepository: IAuctionItemsRepository<any>
  private auctionsRepository: IAuctionsRepository<any>
  private auctionBidsRepository: IAuctionBidsRepository<any>
  private auctionSalesRepository: IAuctionSalesRepository<any>
  private transactionManager: ITransactionManager

  constructor (
    auctionItemsRepository: IAuctionItemsRepository<any>,
    auctionsRepository: IAuctionsRepository<any>,
    auctionBidsRepository: IAuctionBidsRepository<any>,
    auctionSalesRepository: IAuctionSalesRepository<any>,
    transactionManager: ITransactionManager
  ) {
    this.auctionItemsRepository = auctionItemsRepository
    this.auctionsRepository = auctionsRepository
    this.auctionBidsRepository = auctionBidsRepository
    this.auctionSalesRepository = auctionSalesRepository
    this.transactionManager = transactionManager
  }

  async execute (data: IFinishAuctionsDTO): Promise<void> {
    const items = await this.auctionItemsRepository.searchItemsInAuction(data.id)

    ;(items).forEach(async element => {
      const highestBid = await this.auctionBidsRepository.getHighestBid(element.id)

      if (!highestBid) {
        this.transactionManager.addAction(this.auctionItemsRepository.setAvailableStatus, [element.id])
      } else {
        const saleData = AuctionSalesMapper.toPersistence({
          id: element.id,
          date: data.date,
          value: highestBid.value,
          participantId: highestBid.participantId,
          auctionItemId: element.id
        })
        this.transactionManager.addAction(this.auctionSalesRepository.create, [saleData])
        this.transactionManager.addAction(this.auctionItemsRepository.setSoldStatus, [element.id])
      }
    })

    this.transactionManager.addAction(this.auctionsRepository.close, [data.id])
    this.transactionManager.addAction(this.auctionsRepository.setAuctionEndDate, [data.id, data.date])
    this.transactionManager.run()
  }
}

export default new FinishAuctionsUseCase(
  new AuctionItemsRepository(),
  new AuctionsRepository(),
  new AuctionBidsRepository(),
  new AuctionSalesRepository(),
  new TypeORMTransactionManager()
)

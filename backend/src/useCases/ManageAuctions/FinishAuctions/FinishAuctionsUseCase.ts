import uuid from 'uuid'

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
import { AuctionBid } from '../../../entities'
import { BlockchainService } from '../../../services'
import { IChain } from '../../../services/IBlockchainService'

class FinishAuctionsUseCase {
  constructor (
    private auctionItemsRepository: IAuctionItemsRepository<any> = new AuctionItemsRepository(),
    private auctionsRepository: IAuctionsRepository<any> = new AuctionsRepository(),
    private auctionBidsRepository: IAuctionBidsRepository = new AuctionBidsRepository(),
    private auctionSalesRepository: IAuctionSalesRepository<any> = new AuctionSalesRepository(),
    private transactionManager: ITransactionManager = new TypeORMTransactionManager(),
    private readonly blockchainService: BlockchainService = new BlockchainService()
  ) {
  }

  private async createHighestAuctionBidOnBlockchain (data: AuctionBid) {
    const sale = await this.auctionSalesRepository.getSaleByAuctionItemId(data.auctionItemId)

    return this.blockchainService.createChain({
      fcn: 'createCar',
      ChainCodeName: 'fabcar',
      peers: ['peer0.org1.example.com', 'peer0.org2.example.com'],
      args: [
        uuid.v4(),
        new Date().toISOString(),
        data.auctionItem.title,
        sale.auctioneer.name,
        data.participant.name
      ]
    })
  }

  async execute (data: IFinishAuctionsDTO): Promise<AuctionBid[]> {
    const items = await this.auctionItemsRepository.searchItemsInAuction(data.id)

    const highestBidsChains: IChain[] = []

    items.forEach(async element => {
      const highestBid = await this.auctionBidsRepository.getHighestBid(element.id)

      if (!highestBid) {
        this.transactionManager.addAction(this.auctionItemsRepository.setAvailableStatus, [element.id])
      } else {
        const saleData = AuctionSalesMapper.toPersistence({
          id: element.id,
          date: data.date,
          value: highestBid.value,
          participantId: highestBid.participantId,
          auctionItemId: element.id,
          auctioneerId: element.auction.auctioneerId
        })
        this.transactionManager.addAction(this.auctionSalesRepository.create, [saleData])
        this.transactionManager.addAction(this.auctionItemsRepository.setSoldStatus, [element.id])
      }

      const blockchainResult = await this.createHighestAuctionBidOnBlockchain(highestBid)
      highestBidsChains.push(blockchainResult)
    })

    this.transactionManager.addAction(this.auctionsRepository.close, [data.id])
    this.transactionManager.addAction(this.auctionsRepository.setAuctionEndDate, [data.id, data.date])
    await this.transactionManager.run()
    return highestBidsChains
  }
}

export default new FinishAuctionsUseCase()
